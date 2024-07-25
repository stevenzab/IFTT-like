from xml.etree.ElementTree import tostring
from scrapy import Selector
import requests
import random
from discordweb import *
from outlook import *

def getNewVideoCategory(cur, params, id_service):
    cur.execute("SELECT * FROM service_id WHERE id = %s", (id_service,))
    api = cur.fetchone()

    api_value = requests.get(f"{api[2]}{params[0]}")
    if api_value.status_code == 200:
        source = api_value.text
    if source:
        selector = Selector(text=source)
        release_date = selector.xpath('//var').css('.added::text').getall()
        for date in release_date:
            if (date != "Yesterday" and int(date.split()[0]) < 3 and date.split()[1] == "hours"):
                return True

def getNewVideoPornstar(cur, params, id_service):
    cur.execute("SELECT * FROM service_id WHERE id = %s", (id_service,))
    api = cur.fetchone()

    api_value = requests.get(f"{api[2]}pornstar/{params[0]}-{params[1]}")
    if api_value.status_code == 200:
        source = api_value.text
    if source:
        selector = Selector(text=source)
        release_date = selector.xpath('//var').css('.added::text').getall()
        for date in release_date:
            if (date != "Yesterday" and date.split()[1] == "hours"):
                return True

def sendVideoAleatory(cur, params, id_service, user_id, mail):
    cur.execute("SELECT * FROM service_id WHERE id = %s", (id_service,))
    api = cur.fetchone()

    api_value = requests.get(f"{api[2]}{params[0]}")
    if api_value.status_code == 200:
        source = api_value.text
    if source:
        selector = Selector(text=source)
        videos = selector.xpath('//a[contains(@href, "/view_video")]/@href').getall()
        video = random.choice(videos)
        video = video.replace('/', '')
        if (params[1] == "Discord"):
            send_message(cur, [f"{api[2]}{video}"], 6)
        elif (params[1] == "Mail"):
            send_mail(mail, [f"{api[2]}{video}"], user_id, cur)