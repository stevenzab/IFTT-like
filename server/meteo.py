import requests

def check_temp(cur, params, id_service):
    cur.execute("SELECT * FROM service_id WHERE id=%s", (id_service,))
    api = cur.fetchone()

    api_value = requests.get(f"{api[2]}{api[3]}&query={params[0]}")
    api_response = api_value.json()

    if (params[1] == ">"):
        if (api_response['current']['temperature'] > int(params[2])):
            return True
        else:
            return False
    else:
        if (api_response['current']['temperature'] < int(params[2])):
            return True
        else:
            return False

def check_humid(cur, params, id_service):
    cur.execute("SELECT * FROM service_id WHERE id=%s", (id_service,))
    api = cur.fetchone()

    api_value = requests.get(f"{api[2]}{api[3]}&query={params[0]}")
    api_response = api_value.json()

    if (params[1] == ">"):
        if (api_response['current']['humidity'] > int(params[2])):
            return True
        else:
            return False
    else:
        if (api_response['current']['humidity'] < int(params[2])):
            return True
        else:
            return False
