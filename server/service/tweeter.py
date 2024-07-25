import tweepy
import requests
import configparser

api_key = 'J3t0y98ONdrXCVJLVz7c49O03'
api_key_secret = 'oagsFCU0mksC0ERcJ8WUYiKTgvlcfkv4nbIieKz8i0FKME484y'
access_token = '937047305987002369-jNBHOFkj3FSzkSYn6LohtNIAlPSV2of'
access_token_secret = 'hbz92uQgRXySvcab8w20hw725aMIc4BslyczKJtDDp96U'

def connect_tweet(cur, params, id_service):
    cur.execute("SELECT * FROM service_id WHERE id=%s", (id_service,))
    api = cur.fetchone()

    auth = tweepy.OAuthHandler(api_key, api_key_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)

    public_tweets = api.home_timeline()
    print(public_tweets.text)
    return api