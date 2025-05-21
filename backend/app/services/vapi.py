import httpx
from fastapi import HTTPException
from app.config import VAPI_API_KEY

async def handle_voice_query(audio_data: bytes):
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.vapi.ai/v1/call",  # Replace with actual Vapi.ai endpoint
                headers={"Authorization": f"Bearer {VAPI_API_KEY}"},
                data={"audio": audio_data}
            )
            response.raise_for_status()
            return response.json().get("response", "No response from Vapi")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Vapi.ai error: {str(e)}")