from flask import jsonify, request, make_response
import bcrypt
import jwt
import psycopg2

def create_user(conn, first_name, last_name, email, password):
    try:
        cur = conn.cursor()
        cur.execute('SELECT * FROM users WHERE email = %s', (email,))
        user = cur.fetchone()

        if (user):
            return make_response(jsonify({'message': 'User already exist'}), 422)
        else:
            encoded_password = password.encode('utf-8')
            hashed_password = bcrypt.hashpw(encoded_password, bcrypt.gensalt())
            clear_hashed = hashed_password.decode('utf-8')
            try:
                cur.execute('INSERT INTO users (first_name, last_name, email, password)'
                        'VALUES (%s, %s, %s, %s)',
                        (first_name,
                        last_name,
                        email,
                        clear_hashed)
                        )
                conn.commit()
                cur.execute('SELECT * FROM users WHERE email = %s', (email,))
                user = cur.fetchone()
                cur.close()
                jwt_token = jwt.encode({'id': user[0]}, 'secret', algorithm='HS256')
                return make_response(jsonify({'message': 'OK', 'id': user[0], 'first_name': user[1], 'last_name': user[2], 'ID Token': jwt_token}), 200)
            except psycopg2.Error:
                cur.execute("ROLLBACK")
                cur.close()
                return make_response(jsonify({'message': 'Bad Value'}), 422)
    except psycopg2.Error:
        return make_response(jsonify({'message': 'Bad Value'}), 422)