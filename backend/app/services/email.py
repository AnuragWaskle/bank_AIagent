import os
import requests
from fastapi import HTTPException

async def send_email(to_email: str, subject: str, message: str, ticket_id: str = None, status: str = None):
    """
    Send an email using EmailJS REST API.
    Args:
        to_email: Recipient email address
        subject: Email subject
        message: Email body or query
        ticket_id: Optional ticket ID for dynamic variable
        status: Optional ticket status
    Returns:
        bool: True if email sent successfully
    """
    try:
        payload = {
            "service_id": os.getenv("EMAILJS_SERVICE_ID"),
            "template_id": os.getenv("EMAILJS_TEMPLATE_ID"),
            "user_id": os.getenv("EMAILJS_API_KEY"),
            "template_params": {
                "to_name": to_email.split("@")[0],
                "user_email": to_email,
                "ticket_id": ticket_id or "N/A",
                "query": message,
                "status": status or "N/A"
            }
        }
        response = requests.post(
            "https://api.emailjs.com/api/v1.0/email/send",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        if response.status_code != 200:
            raise HTTPException(status_code=500, detail=f"EmailJS error: {response.text}")
        return True
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")