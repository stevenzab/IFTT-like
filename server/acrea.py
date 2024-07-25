from meteo import *
from steam import *
from discordweb import *
from pornhub import *
from outlook import *
from flask_mail import Message
from service.edamam import *
from service.tweeter import *
from pornhub import *
from outlook import *
from service.cat import *
from service.dog import *
from service.randomUser import *
from service.ipfy import *
from service.placeKitten import *
from service.numbersAPI import *
from service.catFact import *

def launch_act(action_id, params, cur, id_service, user_id):
    if (action_id == 1):
        return check_temp(cur, params, id_service)
    if (action_id == 2):
        return check_humid(cur, params, id_service)
    if (action_id == 4):
        return search_recipe(cur, params, id_service)
    if (action_id == 5):
        return getCurrentPlayer(cur, params, id_service)
    if (action_id == 6):
        return getNews(cur, params, id_service)
    if (action_id == 9):
        return getNewVideoCategory(cur, params, id_service)
    if (action_id == 10):
        return getNewVideoPornstar(cur, params, id_service)

def launch_react(reaction_id, params, cur, id_service, user_id, mail):
    if (reaction_id == 3):
        send_mail(mail, params, user_id, cur)
    if (reaction_id == 7):
        send_message(cur, params, id_service)
    if (reaction_id == 11):
        sendVideoAleatory(cur, params, id_service, user_id, mail)
    if (reaction_id == 12):
        response_cat(cur, params, id_service, user_id, mail)
    if (reaction_id == 13):
        generate_user(cur, params, id_service, user_id, mail)
    if (reaction_id == 14):
        response_dog(cur, params, id_service, user_id, mail)
    if (reaction_id == 15):
        get_ip(cur, params, id_service, user_id, mail)
    if (reaction_id == 16):
        get_kitten(cur, params, id_service, user_id, mail)
    if (reaction_id == 17):
        get_numb(cur, params, id_service, user_id, mail)
    if (reaction_id == 18):
        cat_fact(cur, params, id_service, user_id, mail)

def use_acrea(conn, mail):
    cur = conn.cursor()
    cur.execute("SELECT * FROM user_acrea_id")
    acreas = cur.fetchall()

    for x in acreas:
        if (launch_act(x[4], x[6], cur, x[2], x[1])):
            launch_react(x[5], x[7], cur, x[3], x[1], mail)
    cur.close()
