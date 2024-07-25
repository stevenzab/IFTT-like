import discord
from discord.ext import tasks
import random
import requests
import os

TOKEN = os.environ['DISCORD_BOT']

client = discord.Client(intents=discord.Intents.default())

@client.event
async def on_ready():
    launch_crontab.start()
    print('Logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    username = str(message.author).split('#')[0]
    user_message = str(message.content)
    channel = str(message.channel.name)

    if message.author == client.user:
        return

    if message.author.bot:
        return

    if message.channel.name == 'général':
        response = requests.get("http://api-area-a.fr/webhook?service=6&action=8")
        if response.status_code == 200:
            return

@tasks.loop(minutes=10.0)
async def launch_crontab():
    response = requests.get("http://api-area-a.fr/crontab")
    if response.status_code == 200:
        print("Success")

client.run(TOKEN)
