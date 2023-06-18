"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import requests
import os
import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from datetime import date, time, datetime, timezone, timedelta


api_key = os.getenv('OPENWEATHER_API_KEY')
location = "Venezuela"
api = Blueprint('api', __name__)

EMAIL = os.environ.get("EMAIL")
PASSWORD = os.environ.get("PASSWORD")


def sendEmail(message, to, subject):
    smtp_address = "smtp.gmail.com"
    stmp_port = 465  # SLL
    
    print(message, to, subject)

    messageMime = MIMEMultipart("alternative")  # JSON, text, application, pdf
    messageMime["Subject"] = subject
    messageMime["To"] = to
    messageMime["From"] = EMAIL

    html = (
        """   

     <html>
     <body>
        <h1> Hi, """
        + to
        + """ <h1>
        <p>"""
        + message
        + """ </p>
     </body>
     </html>
    
    """
    )

    # create mimetext elements
    text_mime = MIMEText(subject, "plain")
    html_mime = MIMEText(html, "html")

    # attached MIMEText to MIMEMultipart
    messageMime.attach(text_mime)
    messageMime.attach(html_mime)

    # connect to gmails 465 port to send email
    context = ssl.create_default_context()
    emailFrom = EMAIL
    password = PASSWORD
    with smtplib.SMTP_SSL(smtp_address, stmp_port, context=context) as server:
        server.login(emailFrom, password)
        server.sendmail(emailFrom, to, messageMime.as_string())

        return jsonify({"message": "email sent"}), 200
    
################## hello ###############    

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


################API WEATHER (To work on)############
"""@api.route('/weather', methods=['GET'])
def get_weather():
    weather_data = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={location}&units=metric&appid={api_key}")

    if weather_data.status_code == 200:
        weather = weather_data.json()['weather'][0]['main']
        temp = round(weather_data.json()['main']['temp'])
        response = {
            "location": location,
            "weather": weather,
            "temperature": temp
        }
        return jsonify(response), 200
    else:
        return jsonify({"error": "Unable to retrieve weather information."}), 500"""
        
############### CONTACT US EMAIL ##############
@api.route('/send-email', methods=['POST'])
def send_contact_email():
    try:
        body = request.get_json()
        fullname = body['fullname']
        email = body['email']
        phone = body['phone']
        subject = body['subject']
        message = body['message']

        sendEmail(message, 'onlypawscompany@gmail.com', f'Contact Form Submission - {subject}')
        return jsonify({'message': 'Email sent successfully!'}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500
