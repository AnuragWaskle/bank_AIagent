from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, tickets, leads, copywriting, legal, finance, marketing
from app.db.database import Base, engine

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://your-vercel-app.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(tickets.router, prefix="/tickets", tags=["tickets"])
app.include_router(leads.router, prefix="/leads", tags=["leads"])
app.include_router(copywriting.router, prefix="/copywriting", tags=["copywriting"])
app.include_router(legal.router, prefix="/legal", tags=["legal"])
app.include_router(finance.router, prefix="/finance", tags=["finance"])
app.include_router(marketing.router, prefix="/marketing", tags=["marketing"])

@app.get("/")
async def root():
    return {"message": "SmartBank API"}