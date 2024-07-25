import json
from database_create import *
import bcrypt
from flask import jsonify, make_response
import jwt
import psycopg2

def forgot(conn, email, password):
    try:
        cur = conn.cursor()
        cur.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cur.fetchone()

        if (user):
            jwt_token = jwt.encode({'id': user[0]}, 'secret', algorithm='HS256')
            encoded_password = password.encode('utf-8')
            hashed_password = bcrypt.hashpw(encoded_password, bcrypt.gensalt())
            clear_hashed = hashed_password.decode('utf-8')
            try:
                cur.execute("UPDATE users SET password = %s WHERE email = %s", (clear_hashed, email))
                conn.commit()
                cur.close()
                return make_response(jsonify({'message': 'OK', 'id': user[0], 'first_name': user[1], 'last_name': user[2], 'ID Token': jwt_token}), 200)
            except psycopg2.Error:
                cur.execute("ROLLBACK")
                cur.close()
                return make_response(jsonify({'message': 'Bad Value'}), 422)
        else:
            return make_response(jsonify({'message': 'User does not exist'}), 422)
    except psycopg2.Error:
        cur.execute("ROLLBACK")
        cur.close()
        return make_response(jsonify({'message': 'Bad Value'}), 422)