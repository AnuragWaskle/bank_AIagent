from fastapi import APIRouter
from pydantic import BaseModel
from app.services.grok import get_grok_response

router = APIRouter()

class FinanceRequest(BaseModel):
    query: str  # e.g., "Forecast revenue for next 3 months"

@router.post("/finance")
async def financial_analysis(request: FinanceRequest):
    response = await get_grok_response(
        prompt=f"Provide financial analysis for a bank: {request.query}"
    )
    return {"analysis": response}