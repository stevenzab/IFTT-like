import requests
from discordweb import *
from outlook import *

def get_kitten(cur, params, id_service, user_id, mail):
    cur.execute("SELECT * FROM service_id WHERE id=%s", (id_service,))
    api = cur.fetchone()
    url = f"{api[2]}"

    api_value = requests.get(url)
    if (params[0] == "Discord"):
        send_message(cur, [f"{api[2]}"], 6)
    elif (params[0] == "Mail"):
        send_mail(mail, [f"{api[2]}"], user_id, cur)
    return True