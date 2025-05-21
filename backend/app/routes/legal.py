from fastapi import APIRouter, UploadFile, File
from app.services.grok import get_grok_response

router = APIRouter()

@router.post("/legal/analyze")
async def analyze_loan_document(file: UploadFile = File(...)):
    # Mock document analysis (in reality, parse file content)
    content = await file.read()
    prompt = f"Analyze loan document: {content.decode('utf-8')[:500]}... Approve or deny with reason."
    response = await get_grok_response(prompt)
    return {"decision": response}