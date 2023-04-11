from django.core.mail import EmailMessage, get_connection, send_mail
from django.conf import settings
import uuid

def send(subject, message, recipients):
  send_mail(
    		subject=subject,
    		message=message,
    		from_email=settings.EMAIL_HOST_USER,
    		recipient_list=recipients)
  


