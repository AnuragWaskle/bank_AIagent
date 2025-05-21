from fastapi import APIRouter, Depends
from pydantic import BaseModel
from app.models.lead import Lead
from app.db.database import get_db
from sqlalchemy.orm import Session
from datetime import datetime

router = APIRouter()

class LeadCreate(BaseModel):
    email: str
    interest_type: str
    preferred_product: str

@router.post("/leads")
async def create_lead(lead: LeadCreate, db: Session = Depends(get_db)):
    db_lead = Lead(
        email=lead.email,
        interest_type=lead.interest_type,
        preferred_product=lead.preferred_product,
        created_at=datetime.utcnow()
    )
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead

@router.get("/leads")
async def get_leads(db: Session = Depends(get_db)):
    return db.query(Lead).all()