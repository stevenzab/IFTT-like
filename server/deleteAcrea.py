import jwt
from flask import jsonify, make_response
import psycopg2

def deleteAcrea(conn, token, id):
    try:
        if (token != None):
            cur = conn.cursor()
            id_user = jwt.decode(token.split()[1], 'secret', algorithms='HS256')
            cur.execute("SELECT * FROM users WHERE id = %s", (id_user['id'],))

            if (cur.fetchone() != None):
                cur.execute("SELECT * FROM user_acrea_id WHERE id = %s", (id,))
                if (cur.fetchone() != None):
                    try:
                        cur.execute("DELETE FROM user_acrea_id WHERE id = %s", (id,))
                        conn.commit()
                        cur.close()
                        return make_response(jsonify({'message': 'Acrea deleted'}), 200)
                    except psycopg2.Error:
                        cur.execute("ROLLBACK")
                        cur.close()
                        return make_response(jsonify({'message': 'Bad Value'}), 422)
                else:
                    cur.close()
                    return make_response(jsonify({'message': 'Acrea doesnt exist'}), 422)
            else:
                cur.close()
                return make_response(jsonify({'message': 'Unauthorized'}), 401)
        else:
            return make_response(jsonify({'message': 'Unauthorized'}), 401)
    except psycopg2.Error:
        cur.execute("ROLLBACK")
        cur.close()
        return make_response(jsonify({'message': 'Bad Value'}), 422)