import os
import psycopg2

def create_service(cur):
    # id = 1
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Meteo",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url, token)''VALUES (%s, %s, %s)', ("Meteo", "http://api.weatherstack.com/current?access_key=", os.environ["METEO"]))
    # id = 2
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Google",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url, token)''VALUES (%s, %s, %s)', ("Google", "None", os.environ["GOOGLE"]))
    # id = 3
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Outlook",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("Outlook", 'None'))
    # id = 4
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Edamam",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url, token)''VALUES (%s, %s, %s)', ("Edamam", 'https://api.edamam.com/', os.environ["EDAMAM"]))
    # id = 5
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Steam",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("Steam", "https://api.steampowered.com/"))
    # id = 6
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Discord",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url, token)''VALUES (%s, %s, %s)', ("Discord", "https://discord.com/api/webhooks/", os.environ["DISCORD"]))
    # id = 7
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Pornhub",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("Pornhub", "https://www.pornhub.com/"))
    # id = 8
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Catresponse",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("Catresponse", "https://http.cat/200"))
    # id = 9
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("RandomUserGen",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("RandomUserGen", "https://randomuser.me/"))
    # id = 10
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Dogresponse",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("Dogresponse", "https://random.dog/"))
    # id = 11
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("Ipfy",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("Ipfy", "https://api.ipify.org?format=json"))
    # id = 12
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("PlaceKitten",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("PlaceKitten", "http://placekitten.com/500/300"))

    #id = 13
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("NumbersRand",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("NumbersRand", "http://numbersapi.com/random?min=10&max=200"))

    #id = 14
    cur.execute('SELECT * FROM service_id WHERE service_name = %s', ("CatFact",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO service_id (service_name, service_url)''VALUES (%s, %s)', ("CatFact", "https://catfact.ninja/fact"))

def create_acrea(cur):
    # id = 1
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Meteo",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s',  ("Temperature",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Temperature", "Appeler seulement si la température est supérieur à X", 3, ["Ville", "Symbole de comparaison", "Température"]))

    # id = 2
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Meteo",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s',  ("Humidite",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Humidite", "Appeler seulement si l'humidité est supérieur à X", 3, ["Ville", "Symbole de comparaison", "Taux d'humidité"]))

    # id = 3
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Outlook",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Mail Outlook",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Mail Outlook", "Envoyer un mail via Outlook", 1, ["Message"]))

    # id = 4
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Edamam",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Recette",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Recette", "Envoyer une recette via Edamam", 1, ["Recette"]))

    # id = 5
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Steam",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Nombre Joueur",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Nombre Joueur", "Permet de savoir si plus de X joueurs sur le jeu X", 3, ["ID du jeu", "Symbole de comparaison", "Nombres"]))

    # id = 6
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Steam",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Nouvelle info",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Nouvelle info", "Permet de savoir quand de nouvelles info sont donnés sur le jeu X", 1, ["ID du jeu"]))

    # id = 7
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Discord",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Envoie Message",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Envoie Message", "Envoie des messages grâce à l'API Discord", 1, ["Message"]))

    # id = 8
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Discord",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Recevoir un message",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description)''VALUES (%s, %s, %s)', (service_id, "Recevoir un message", "Recevoir un messages grâce au bot Discord"))

    # id = 9
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Pornhub",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Nouvelle vidéo catégorie",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Nouvelle vidéo catégorie", "Permet de savoir si une nouvelle vidéo de X catégories est sortie aujourd'hui", 1, ["Fin d'url de la catégorie"]))

    # id = 10
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Pornhub",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Nouvelle vidéo pornstar",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Nouvelle vidéo pornstar", "Permet de savoir si une nouvelle vidéo de X est sortie aujourd'hui", 2, ["Prénom", "Nom"]))

    # id = 11
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Pornhub",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Vidéo aléatoire",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Vidéo aléatoire", "Envoie une vidéo aléatoire sur X service", 2, ["Fin d'URL", "Service utilisé (Discord ou Mail)"]))

    # id =  12
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Catresponse",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Réponse chat 200",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Réponse chat 200", "Envoie une image OK sur X service", 1, ["Service utilisé (Discord, Mail)"]))

    # id = 13
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("RandomUserGen",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Générateur de personne",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Générateur de personne", "Envoie une personne aléatoire sur X service", 1, ["Service utilisé (Discord ou Mail)"]))

    # id =  14
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Dogresponse",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Image aléatoire",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Image aléatoire", "Envoie une Image aléatoire sur X service", 1, ["Service utilisé (Discord ou Mail)"]))

    # id = 15
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("Ipfy",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Ipfy",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Ipfy", "Envoie une IP sur X service", 1, ["Service utilisé (Discord ou Mail)"]))

    # id = 16
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("PlaceKitten",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("PlaceKitten",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "PlaceKitten", "Envoie une image de chat", 1, ["Service utilisé (Discord ou Mail)"]))

    # id = 17
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("NumbersRand",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Nombre aléatoire",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Nombre aléatoire", "Envoie un nombre aléatoire", 1, ["Service utilisé (Discord ou Mail)"]))

    #id = 18
    cur.execute('SELECT id FROM service_id WHERE service_name = %s', ("CatFact",))
    service_id = cur.fetchone()
    cur.execute('SELECT * FROM acrea_id WHERE acrea_name = %s', ("Faits sur les chats",))
    if (cur.fetchone() == None):
        cur.execute('INSERT INTO acrea_id (service_id, acrea_name, acrea_description, number_params, name_params)''VALUES (%s, %s, %s, %s, %s)', (service_id, "Faits sur les chats", "Envoie un fait sur les chats", 1, ["Service utilisé (Discord ou Mail)"]))

def connect_db():
    conn = psycopg2.connect(
        host=os.environ['PGHOST'],
        database=os.environ['PGDATABASE'],
        user=os.environ['PGUSER'],
        password=os.environ['PGPASSWORD'])

    cur = conn.cursor()

    cur.execute('CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY,'
                    'first_name varchar (150) NOT NULL,'
                    'last_name varchar (150) NOT NULL,'
                    'email varchar(150) NOT NULL,'
                    'password varchar(150) NULL,'
                    'created_date date DEFAULT CURRENT_TIMESTAMP);'
                )

    cur.execute('CREATE TABLE IF NOT EXISTS user_token (id serial PRIMARY KEY,'
                    'user_id int NOT NULL,'
                    'service_id int NOT NULL,'
                    'token varchar(2048) NOT NULL,'
                    'created_date date DEFAULT CURRENT_TIMESTAMP);'
                )

    cur.execute('CREATE TABLE IF NOT EXISTS service_id (id serial PRIMARY KEY,'
                    'service_name varchar(150) NOT NULL,'
                    'service_url varchar(150) NOT NULL,'
                    'token varchar(150) NULL,'
                    'created_date date DEFAULT CURRENT_TIMESTAMP);'
                )

    cur.execute('CREATE TABLE IF NOT EXISTS acrea_id (id serial PRIMARY KEY,'
                    'service_id int NOT NULL,'
                    'acrea_name varchar(150) NOT NULL,'
                    'acrea_description varchar(150) NOT NULL,'
                    'number_params int NULL,'
                    'name_params text[] NULL,'
                    'created_date date DEFAULT CURRENT_TIMESTAMP);'
                )

    cur.execute('CREATE TABLE IF NOT EXISTS user_acrea_id (id serial PRIMARY KEY,'
                    'user_id int NOT NULL,'
                    'service_action_id int NOT NULL,'
                    'service_reaction_id int NOT NULL,'
                    'action_id int NOT NULL,'
                    'reaction_id int NOT NULL,'
                    'params_action text[] NULL,'
                    'params_reaction text[] NULL,'
                    'created_date date DEFAULT CURRENT_TIMESTAMP);'
                )

    create_service(cur)
    create_acrea(cur)

    conn.commit()
    cur.close()
    return conn