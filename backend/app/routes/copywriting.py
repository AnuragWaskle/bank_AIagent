from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from app.services.grok import call_grok_api
from app.routes.auth import get_current_user

router = APIRouter()

class CopywritingRequest(BaseModel):
    prompt: str
    content_type: str

@router.post("/copywriting")
async def generate_copywriting(request: CopywritingRequest, current_user: dict = Depends(get_current_user)):
    try:
        response = await call_grok_api(request.prompt, request.content_type)
        return {"content": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))