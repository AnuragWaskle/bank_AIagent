from sqlalchemy import Column, Integer, String, DateTime
from app.db.database import Base
from datetime import datetime

class Ticket(Base):
    __tablename__ = "tickets"

    id = Column(Integer, primary_key=True, index=True)
    customer_id = Column(String, index=True)
    query = Column(String)
    status = Column(String, default="open")
    response = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, nullable=True)