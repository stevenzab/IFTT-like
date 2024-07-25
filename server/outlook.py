from flask_mail import Message

def send_mail(mail, params, user_id, cur):
    message = params[0]
    cur.execute("SELECT email FROM users WHERE id=%s", (user_id,))
    email = cur.fetchone()
    msg = Message("Area Reaction", recipients=[email[0]], body=message, sender='areaepi@outlook.fr')
    mail.send(msg)
