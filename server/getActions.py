import jwt
from flask import jsonify, make_response
import psycopg2

def actions(conn, token, id_service):
    try:
        if (token != None):
            cur = conn.cursor()
            id = jwt.decode(token.split()[1], 'secret', algorithms='HS256')
            cur.execute("SELECT * FROM users WHERE id = %s", (id['id'],))

            if (cur.fetchone() != None):
                try:
                    cur.execute("SELECT id, acrea_name, acrea_description, number_params, name_params FROM acrea_id WHERE service_id = %s", (id_service,))
                    acrea = cur.fetchall()
                    description = cur.description
                    result = [{description[index][0]:column for index, column in enumerate(value)} for value in acrea]
                    cur.close()
                    if (acrea != None):
                        return make_response(jsonify({'Acrea': result}), 200)
                    else:
                        return make_response(jsonify({'message': 'Bad service'}), 422)
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