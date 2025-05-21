import httpx
from fastapi import HTTPException
from app.config import GROK_API_KEY

async def get_grok_response(prompt: str):
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.x.ai/v1/grok",  # Replace with actual Grok API endpoint
                headers={"Authorization": f"Bearer {GROK_API_KEY}"},
                json={"prompt": prompt}
            )
            response.raise_for_status()
            return response.json().get("response", "No response from Grok")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Grok API error: {str(e)}")