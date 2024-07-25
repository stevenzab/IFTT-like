import requests
from discordweb import *
from outlook import *

def cat_fact(cur, params, id_service, user_id, mail):
    cur.execute("SELECT * FROM service_id WHERE id=%s", (id_service,))
    api = cur.fetchone()
    url = f"{api[2]}"

    api_value = requests.get(url)
    if (params[0] == "Discord"):
        send_message(cur, [f"{api_value}"], 6)
    elif (params[0] == "Mail"):
        send_mail(mail, [f"{api_value}"], user_id, cur)
    return True