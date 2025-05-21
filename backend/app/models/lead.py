from sqlalchemy import Column, Integer, String, DateTime
from app.db.database import Base
from datetime import datetime

class Lead(Base):
    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, index=True)
    interest_type = Column(String)
    preferred_product = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)