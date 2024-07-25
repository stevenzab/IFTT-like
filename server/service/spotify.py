from locale import currency
from flask import jsonify, request, make_response

ACCESS_TOKEN = 'BQCBL-vFhxpvSsW8F2NLdVZHUe2dO6fvImjqktMDhO7H3X-_9sj7wct5-9wFTx28ZF6qxq_hWJTGzfsYaAUZviVmbIu13htfdSD1K-aJXlK7upFy7rRFnaTZDfieUQE6Ef8RoNMOY4mm3MQ6S_zIVMQ97XnnVuaSZgQtlj75xeUk3O8zZQdIO6M7woEfC6Eteq8sbAXx7pc3F42OtrqQ-iEXJgDevWtKQtehND4RwDM8uXgwRRsqfRllzXk3'

def spotify_create_playlist(conn, service_name, service_url):
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE service_name = %s", (service_name,))
    user = cur.fetchone()


def spotify_create_user(conn, service_name, user_id, token):
    cur = conn.cursor()
    cur.execute("SELECT * FROM user_token WHERE service_name = %s AND token = %s", (service_name, token,))
    service = cur.fetchone()

    cur.execute("SELECT * FROM users WHERE service_id = %s", (service_name,))
    user = cur.fetchone()

    if user[1] == service_name:
        return make_response(jsonify({'message': 'Service name already exists'}), 422)

    if user_id == None:
        return make_response(jsonify({'message': 'User does not exist'}), 422)
    else:
        return make_response(jsonify({'message': 'OK', 'id': user[0]}), 200)




