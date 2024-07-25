import jwt
from flask import jsonify, make_response
import psycopg2

def deleteUserId(conn, token):
    try:
        if (token != None):
            cur = conn.cursor()
            id = jwt.decode(token.split()[1], 'secret', algorithms='HS256')
            cur.execute("SELECT * FROM users WHERE id = %s", (id['id'],))

            if (cur.fetchone() != None):
                try:
                    cur.execute("DELETE FROM users WHERE id = %s", (id['id'],))
                    conn.commit()
                    cur.close()
                    return make_response(jsonify({'message': 'User Deleted'}), 200)
                except psycopg2.Error:
                    cur.execute("ROLLBACK")
                    cur.close()
                    return make_response(jsonify({'message': "Bad Value"}), 422)
            else:
                cur.close()
                return make_response(jsonify({'message': 'Unauthorized'}), 401)
        else:
            return make_response(jsonify({'message': 'Unauthorized'}), 401)
    except psycopg2.Error:
        cur.execute("ROLLBACK")
        cur.close()
        return make_response(jsonify({'message': "Bad Value"}), 422)