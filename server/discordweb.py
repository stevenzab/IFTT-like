import requests

def send_message(cur, params, id_service):
    cur.execute("SELECT * FROM service_id WHERE id=%s", (id_service,))
    api = cur.fetchone()

    api_value = requests.post(f"{api[2]}1034080341310312568/{api[3]}", data={"content": params[0]})