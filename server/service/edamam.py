import requests
import os

api_id = '96fd0532'

def search_recipe(cur, params, id_service):
    cur.execute("SELECT * FROM service_id WHERE id=%s", (id_service,))
    api = cur.fetchone()

    api_value = requests.get(f"{api[2]}api/recipes/v2?type=public&q={params=}&app_id={api_id}&app_key={api[3]}")
    api_response = api_value.json()
    if (api_response["count"] > 0):
        return True
    else:
        return False