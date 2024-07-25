import time

def about(ip):
    data = {
        "clients": {
            "host": ip
        },
        "server": {
            "current_time": int(time.time()),
            "services": [{
                "name": "Meteo",
                "actions": [{
                    "name": "Temperature",
                    "description": "The temperature at X city is >/< to X value"
                },
                {
                    "name": "Humidity",
                    "description": "The humidity at X city is >/< to X value"
                }],
                "reactions": [{}]
            }, {
                "name": "Google",
                "actions": [{}],
                "reactions": [{}]
            }, {
                "name": "Outlook",
                "actions": [{}],
                "reactions": [{
                    "name": "Send Mail",
                    "description": "Send X message in mail Outlook"
                }]
            }, {
                "name": "Steam",
                "actions": [{
                    "name": "Players numbers",
                    "description": "Check if game X got >/< than X players"
                }, {
                    "name": "New Info",
                    "description": "Check if a new informations about game X is out"
                }],
                "reactions": [{}]
            }, {
                "name": "Discord",
                "actions": [{
                    "name": "Receive message",
                    "description": "Check if new message is received"
                }],
                "reactions": [{
                    "name": "Send message",
                    "description": "Send message X on Discord"
                }]
            }, {
                "name": "Pornhub",
                "actions": [{
                    "name": "New category video",
                    "description": "Check if category X got a new video"
                }, {
                    "name": "New pornstar video",
                    "description": "Check if pornstar X got a new video"
                }],
                "reactions": [{
                    "name": "Send aleatory video",
                    "description": "Send an aleatory video on service X"
                }]
            }, {
                "name": "Edamam",
                "actions": [{
                    "name": "Recette",
                    "description": "Envoyer une recette via Edamam"
                }],
                "reactions": [{}]
            }, {
                "name": "Catresponse",
                "actions": [{}],
                "reactions": [{
                    "name": "Response Cat 200",
                    "description": "Send OK image cat on X service"
                }]
            }, {
                "name": "RandomUserGen",
                "actions": [{}],
                "reactions": [{
                    "name": "Generate a profil",
                    "description": "Send a random profil on X service"
                }]
            }, {
                "name": "Dogresponse",
                "actions": [{}],
                "reactions": [{
                    "name": "Random image",
                    "description": "Send a randon image on X service"
                }]
            }, {
                "name": "Ipfy",
                "actions": [{}],
                "reactions": [{
                    "name": "Ipfy",
                    "description": "Send IP on X service"
                }]
            }, {
                "name": "PlaceKitten",
                "actions": [{}],
                "reactions": [{
                    "name": "PlaceKitten",
                    "description": "Send a picture of a Kitten on X service"
                }]
            }, {
                "name": "NumbersRand",
                "actions": [{}],
                "reactions": [{
                    "name": "Random Number",
                    "description": "Send X message in mail Outlook"
                }]
            }, {
                "name": "CatFact",
                "actions": [{}],
                "reactions": [{
                    "name": "Facts on cat",
                    "description": "Send a facts on cat on X service"
                }]
            },]
        }
    }

    return data