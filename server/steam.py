from datetime import datetime
import requests

def getCurrentPlayer(cur, params, id_service):
    cur.execute("SELECT * FROM service_id WHERE id=%s", (id_service,))
    api = cur.fetchone()

    api_value = requests.get(f"{api[2]}ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid={params[0]}")
    api_json = api_value.json()

    if (params[1] == ">"):
        return (api_json['response']['player_count'] > int(params[2]))
    else:
        return (api_json['response']['player_count'] < int(params[2]))

def getNews(cur, params, id_service):
    date = datetime.date(datetime.now())
    cur.execute("SELECT * FROM service_id WHERE id=%s", (id_service,))
    api = cur.fetchone()

    api_value = requests.get(f"{api[2]}ISteamNews/GetNewsForApp/v2/?appid={params[0]}&count=1&format=json")
    api_json = api_value.json()
    timestamp_news = api_json['appnews']['newsitems'][0]['date']
    date_news = datetime.fromtimestamp(timestamp_news).date()
    if (date_news.month == date.month):
        return True
    else:
        return False