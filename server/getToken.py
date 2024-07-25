import jwt
from flask import jsonify, make_response
import psycopg2

def getToken(conn, token):
    try:
        if (token != None):
            cur = conn.cursor()
            id = jwt.decode(token.split()[1], 'secret', algorithms="HS256")
            cur.execute("SELECT * FROM users WHERE id = %s", (id['id'],))
            user = cur.fetchone()
        else:
            return make_response(jsonify({"message": "Unauthorized"}), 401)
    
        if (user != None):
            try:
                cur.execute("SELECT * FROM user_token WHERE user_id = %s", (id['id'],))
                description = cur.description
                result = [{description[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
                cur.close()
                return make_response(jsonify({"Token": result}), 200)
            except psycopg2.Error:
                cur.execute("ROLLBACK")
                cur.close()
                return make_response(jsonify({'message': 'Bad Value'}), 422)
        else:
            make_response(jsonify({"message": "Unauthorized"}), 401)
    except psycopg2.Error:
        cur.execute("ROLLBACK")
        cur.close()
        return make_response(jsonify({'message': 'Bad Value'}), 422)