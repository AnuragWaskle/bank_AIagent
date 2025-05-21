from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from app.models.ticket import Ticket
from app.db.database import get_db
from sqlalchemy.orm import Session
from datetime import datetime

router = APIRouter()

class TicketCreate(BaseModel):
    customer_id: str
    query: str
    status: str = "open"

class TicketUpdate(BaseModel):
    status: str
    response: str = None

@router.post("/tickets")
async def create_ticket(ticket: TicketCreate, db: Session = Depends(get_db)):
    db_ticket = Ticket(
        customer_id=ticket.customer_id,
        query=ticket.query,
        status=ticket.status,
        created_at=datetime.utcnow()
    )
    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)
    return db_ticket

@router.get("/tickets")
async def get_tickets(db: Session = Depends(get_db)):
    return db.query(Ticket).all()

@router.put("/tickets/{ticket_id}")
async def update_ticket(ticket_id: int, ticket_update: TicketUpdate, db: Session = Depends(get_db)):
    db_ticket = db.query(Ticket).filter(Ticket.id == ticket_id).first()
    if not db_ticket:
        raise HTTPException(status_code=404, detail="Ticket not found")
    db_ticket.status = ticket_update.status
    if ticket_update.response:
        db_ticket.response = ticket_update.response
        db_ticket.updated_at = datetime.utcnow()
    db.commit()
    db.refresh(db_ticket)
    return db_ticket
