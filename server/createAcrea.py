import jwt
from flask import jsonify, make_response
import psycopg2

def createActionReaction(conn, token, id_service_action, id_service_reaction, id_action, id_reaction, arguments, params):
    try:
        if (token != None):
            cur = conn.cursor()
            id = jwt.decode(token.split()[1], 'secret', algorithms='HS256')
            cur.execute("SELECT * FROM users WHERE id = %s", (id['id'],))
            user = cur.fetchone()
        else:
            return make_response(jsonify({'message': 'Unauthorized'}), 401)

        if (user != None):
            cur.execute("SELECT * FROM service_id WHERE id = %s", (id_service_action,))
            service_action = cur.fetchone()
            cur.execute("SELECT * FROM service_id WHERE id = %s", (id_service_reaction,))
            service_reaction = cur.fetchone()
        else:
            cur.close()
            return make_response(jsonify({'message': 'Unauthorized'}), 401)

        if (service_action != None and service_reaction != None):
            cur.execute("SELECT * FROM acrea_id WHERE id = %s", (id_action,))
            action = cur.fetchone()
            cur.execute("SELECT * FROM acrea_id WHERE id = %s", (id_reaction,))
            reaction = cur.fetchone()
        else:
            cur.close()
            return make_response(jsonify({'message': 'Service doesnt exist'}), 422)

        if (action != None and reaction != None):
            try:
                cur.execute('INSERT INTO user_acrea_id (user_id, service_action_id, service_reaction_id, action_id, reaction_id, params_action, params_reaction)''VALUES (%s, %s, %s, %s, %s, %s, %s)', (id['id'], id_service_action, id_service_reaction, id_action, id_reaction, arguments, params))
                conn.commit()
                cur.close()
                return make_response(jsonify({'message': 'Acrea created'}), 200)
            except psycopg2.Error:
                cur.execute("ROLLBACK")
                cur.close()
                return make_response(jsonify({'message': 'Bad value'}), 422)
        else:
            return make_response(jsonify({'message': 'Action-Reaction doesnt exist'}), 422)
    except psycopg2.Error:
        cur.execute("ROLLBACK")
        cur.close()
        return make_response(jsonify({'message': 'Bad Value'}), 422)