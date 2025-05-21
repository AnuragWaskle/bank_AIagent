from fastapi import APIRouter, Depends
from pydantic import BaseModel
from app.services.grok import get_grok_response

router = APIRouter()

class CopywritingRequest(BaseModel):
    prompt: str
    content_type: str  # e.g., "blog", "social_post", "landing_page"

@router.post("/copywriting")
async def generate_content(request: CopywritingRequest):
    # Use Grok API to generate content based on prompt
    response = await get_grok_response(
        prompt=f"Generate a {request.content_type} for a bank: {request.prompt}"
    )
    return {"content": response}