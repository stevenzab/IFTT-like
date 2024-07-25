from flask import jsonify, make_response
from acrea import send_mail
from discordweb import *
from pornhub import *
from service.dog import *
from service.randomUser import *
from service.cat import *
from service.ipfy import *
from service.placeKitten import *
from service.numbersAPI import *
from service.catFact import *

def launch_react(cur, reaction_id, params, user_id, id_service, mail):
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

def webhook(conn, service, action, mail):
    cur = conn.cursor()
    cur.execute("SELECT id FROM service_id WHERE id = %s", (service,))
    service_id = cur.fetchone()

    if (service_id != None):
        cur.execute("SELECT id FROM acrea_id WHERE id = %s", (action,))
        action_id = cur.fetchone()
    else:
        cur.close()
        return make_response(jsonify({"message": "Service doesn't exist"}), 422)

    if (action_id != None):
        cur.execute("SELECT * FROM user_acrea_id WHERE service_action_id = %s AND action_id = %s", (service_id, action_id))
        acreas = cur.fetchall()
        for acrea in acreas:
            launch_react(cur, acrea[5], acrea[7], acrea[1], acrea[3], mail)
        cur.close()
        return make_response(jsonify({"message": "OK"}), 200)
    else:
        cur.close()
        return make_response(jsonify({"message": "Action doesn't exist"}), 422)