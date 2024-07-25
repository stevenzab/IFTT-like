import jwt
from flask import jsonify, make_response
import psycopg2

def acrea(conn, token):
    try:
        if (token != None):
            cur = conn.cursor()
            id = jwt.decode(token.split()[1], 'secret', algorithms='HS256')
            cur.execute("SELECT * FROM users WHERE id = %s", (id['id'],))

            if (cur.fetchone() != None):
                try:
                    cur.execute("SELECT * FROM user_acrea_id WHERE user_id = %s", (id['id'],))
                    description = cur.description
                    result = [{description[index][0]:column for index, column in enumerate(value)} for value in cur.fetchall()]
                    cur.close()
                    return make_response(jsonify({'acrea': result}), 200)
                except psycopg2.Error:
                    cur.execute("ROLLBACK")
                    cur.close()
                    return make_response(jsonify({'message': 'Bad Value'}), 422)
            else:
                return make_response(jsonify({'message': 'Unauthorized'}), 401)
        else:
            return make_response(jsonify({'message': 'Unauthorized'}), 401)
    except psycopg2.Error:
        cur.execute("ROLLBACK")
        cur.close()
        return make_response(jsonify({'message': 'Bad Value'}), 422)