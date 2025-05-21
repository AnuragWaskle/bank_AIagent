import httpx
from fastapi import HTTPException
from app.config import EMAILJS_API_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID

async def send_email(to_email: str, subject: str, message: str):
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.emailjs.com/api/v1.0/email/send",
                json={
                    "service_id": EMAILJS_SERVICE_ID,
                    "template_id": EMAILJS_TEMPLATE_ID,
                    "user_id": EMAILJS_API_KEY,
                    "template_params": {
                        "to_email": to_email,
                        "subject": subject,
                        "message": message
                    }
                }
            )
            response.raise_for_status()
            return {"message": "Email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"EmailJS error: {str(e)}")