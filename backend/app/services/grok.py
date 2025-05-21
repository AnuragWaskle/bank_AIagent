import os
import requests
from fastapi import HTTPException

async def call_grok_api(prompt: str, content_type: str):
    """
    Call xAI Grok API to generate content.
    Args:
        prompt: User input prompt
        content_type: Type of content (e.g., blog, legal)
    Returns:
        str: Generated content
    """
    try:
        response = requests.post(
            "https://api.x.ai/v1/grok/completions",  # Verify with xAI
            headers={"Authorization": f"Bearer {os.getenv('GROK_API_KEY')}"},
            json={
                "prompt": f"Generate {content_type}: {prompt}",
                "model": "grok-3",
                "max_tokens": 500
            }
        )
        response.raise_for_status()
        return response.json().get("choices", [{}])[0].get("text", "No content returned")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Grok API error: {str(e)}")