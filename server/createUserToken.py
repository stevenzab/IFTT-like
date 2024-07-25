import jwt
from flask import make_response, jsonify
import psycopg2

def tokenDefined(cur, conn, token, service_name, token_service):
    try:
        id = jwt.decode(token.split()[1], 'secret', algorithms=['HS256'])
        cur.execute("SELECT * FROM users WHERE id = %s", (id['id'],))
        if (cur.fetchone() != None):
            cur.execute("SELECT id FROM service_id WHERE service_name = %s", (service_name,))
            id_service = cur.fetchone()
            if (id_service != None):
                try:
                    cur.execute('INSERT INTO user_token (user_id, service_id, token)''VALUES (%s, %s, %s)', (id['id'], id_service, token_service))
                    conn.commit()
                    cur.close()
                    return make_response(jsonify({'message': 'Token added succesfully'}), 200)
                except psycopg2.Error:
                    cur.execute("ROLLBACK")
                    cur.close()
                    return make_response(jsonify({'message': 'Bad Value'}), 422)
            else:
                cur.close()
                return make_response(jsonify({'message': 'Service doesnt exist'}), 422)
        else:
            cur.close()
            return make_response(jsonify({'message': 'Unauthorized'}), 401)
    except psycopg2.Error:
        cur.execute("ROLLBACK")
        cur.close()
        return make_response(jsonify({'message': 'Bad Value'}), 422)

def connectUser(client):
    jwt_token = jwt.encode({'id': client[0]}, 'secret', algorithm='HS256')
    return make_response(jsonify({'message': 'OK', 'id': client[0], 'first_name': client[1], 'last_name': client[2], 'ID Token': jwt_token}), 200)

def createUserToken(conn, token, service_name, email, first_name, last_name, token_service):
    cur = conn.cursor()
    try:
        if (token != None):
            return tokenDefined(cur, conn, token, service_name, token_service)
        else:
            if (email != None and first_name != None and last_name != None):
                cur.execute('SELECT * FROM users WHERE email = %s', (email,))
                user = cur.fetchone()
                if (user == None):
                    cur.execute('INSERT INTO users (first_name, last_name, email)''VALUES (%s, %s, %s)', (first_name, last_name, email))
                    conn.commit()
                    cur.execute('SELECT * FROM users WHERE email = %s', (email,))
                    client = cur.fetchone()
                    cur.execute('SELECT id FROM service_id WHERE service_name = %s', (service_name,))
                    service_id = cur.fetchone()
                    if (service_id != None):
                        try:
                            cur.execute('INSERT INTO user_token (user_id, service_id, token)''VALUES (%s, %s, %s)', (client[0], service_id, token_service))
                            cur.close()
                            return connectUser(client)
                        except psycopg2.Error:
                            cur.execute('ROLLBACK')
                            cur.close()
                            return make_response(jsonify({'message': 'Bad Value'}), 422)
                    else:
                        return make_response(jsonify({'message': 'Service doesnt exist'}), 422)
                else:
                    cur.execute("SELECT service_id FROM user_token WHERE user_id = %s", (user[0],))
                    service_id = cur.fetchone()
                    if (service_id != None):
                        try:
                            cur.execute("UPDATE user_token SET token = %s WHERE user_id = %s AND service_id = %s", (token_service, user[0], service_id))
                            conn.commit()
                            cur.close()
                            return connectUser(user)
                        except psycopg2.Error:
                            cur.execute("ROLLBACK")
                            cur.close()
                            return make_response(jsonify({'message': 'Bad Value'}), 422)
                    else:
                        cur.close()
                        return make_response(jsonify({'message': 'User already exist'}), 422)
            else:
                cur.close()
                return make_response(jsonify({'message': 'Not enough arguments'}), 422)
    except psycopg2.Error:
        cur.execute("ROLLBACK")
        cur.close()
        return make_response(jsonify({'message': 'Bad Value'}), 422)