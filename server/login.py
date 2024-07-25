from flask import jsonify, request, make_response
import jwt
import bcrypt
import psycopg2

def login(conn, email, password):
    try:
        cur = conn.cursor()
        cur.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cur.fetchone()
        check = password.encode('utf-8')

        if user:
            if bcrypt.checkpw(check, user[4].encode('utf-8')):
                pyjwt = jwt.encode({'id': user[0]}, 'secret', algorithm='HS256')
                return make_response(jsonify({'message': 'OK', 'id': user[0], 'first_name': user[1], 'last_name': user[2], 'ID Token': pyjwt}), 200)
            else:
                return make_response(jsonify({'message': 'Wrong password or email'}), 422)
        else:
            return make_response(jsonify({'message': 'User does not exist'}), 422)
    except psycopg2.Error:
        cur.execute("ROLLBACK")
        cur.close
        return make_response(jsonify({'message': 'Bad Value'}), 422)