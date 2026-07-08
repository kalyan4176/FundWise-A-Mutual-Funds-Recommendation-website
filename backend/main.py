from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
from model import FundRecommender
import os
import uvicorn

app = FastAPI(title="Mutual Fund Recommender")

# CORS Configuration
origins = [
    "http://localhost:5173",  # Local frontend
    "https://mf-recommendation-website.vercel.app", # Example Vercel domain
    os.environ.get("FRONTEND_URL", "*") # Allow dynamic configuration
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Keep * for now to avoid issues, or use `origins` list
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Model
recommender = FundRecommender()

class UserProfile(BaseModel):
    investment_amount: float
    risk_appetite: str  # Low, Medium, High
    age: int
    duration: int      # Years
    sip_or_lumpsum: str
    net_worth: Optional[float] = 0
    dependents: Optional[int] = 0
    salary: Optional[float] = 0
    savings: Optional[float] = 0

@app.get("/")
@app.head("/")
def read_root():
    return {"message": "Welcome to MF Recommender API"}

@app.post("/recommend")
def get_recommendations(profile: UserProfile):
    try:
        user_data = profile.dict()
        recommendations = recommender.get_recommendations(user_data)
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ✅ REQUIRED for Render
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port
    )
