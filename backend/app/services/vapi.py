import os
import requests
from fastapi import HTTPException

async def log_vapi_call(call_data: dict):
    """
    Log Vapi.ai call metadata to the backend.
    Args:
        call_data: Dictionary containing call details (e.g., call_id, status)
    Returns:
        bool: True if logged successfully
    """
    try:
        # Placeholder: Update with actual Vapi.ai endpoint
        response = requests.post(
            "https://api.vapi.ai/call/log",  # Verify with Vapi.ai docs
            headers={"Authorization": f"Bearer {os.getenv('VAPI_API_KEY')}"},
            json=call_data
        )
        if response.status_code != 200:
            raise HTTPException(status_code=500, detail=f"Vapi.ai error: {response.text}")
        return True
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to log Vapi call: {str(e)}")