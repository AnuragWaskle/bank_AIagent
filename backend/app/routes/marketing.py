from fastapi import APIRouter
from pydantic import BaseModel
from app.services.grok import get_grok_response

router = APIRouter()

class MarketingRequest(BaseModel):
    prompt: str  # e.g., "Create Diwali offer ad for fixed deposits"
    content_type: str  # e.g., "ad", "newsletter"

@router.post("/marketing")
async def generate_marketing_content(request: MarketingRequest):
    response = await get_grok_response(
        prompt=f"Generate a {request.content_type} for a bank: {request.prompt}"
    )
    return {"content": response}