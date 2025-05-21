from dotenv import load_dotenv
import os

load_dotenv()

GROK_API_KEY = os.getenv("GROK_API_KEY")
VAPI_API_KEY = os.getenv("VAPI_API_KEY")
EMAILJS_API_KEY = os.getenv("EMAILJS_API_KEY")
EMAILJS_SERVICE_ID = os.getenv("EMAILJS_SERVICE_ID")
EMAILJS_TEMPLATE_ID = os.getenv("EMAILJS_TEMPLATE_ID")