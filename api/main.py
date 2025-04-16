
from fastapi import FastAPI, HTTPException, Depends, Request, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import stripe
import os
from supabase import create_client, Client
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Stripe
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

# Initialize Supabase
supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
supabase: Client = create_client(supabase_url, supabase_key)

# Models
class UserSignUp(BaseModel):
    email: str
    password: str

class PaymentIntent(BaseModel):
    email: str
    amount: int

# Authentication routes
@app.post("/auth/signup")
async def signup(user: UserSignUp):
    try:
        response = supabase.auth.sign_up({
            "email": user.email,
            "password": user.password,
        })
        
        user_id = response.user.id if response.user else None
        
        if user_id:
            # Store user in users table
            supabase.table("users").insert({
                "id": user_id,
                "email": user.email,
                "created_at": "now()",
            }).execute()
            
        return {"success": True, "user": response.user}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/auth/login")
async def login(user: UserSignUp):
    try:
        response = supabase.auth.sign_in_with_password({
            "email": user.email,
            "password": user.password,
        })
        return {"success": True, "session": response.session, "user": response.user}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Payment routes
@app.post("/create-payment-intent")
async def create_payment_intent(payment_data: PaymentIntent):
    try:
        # Check if customer already exists
        customers = stripe.Customer.list(email=payment_data.email)
        
        if customers.data:
            customer = customers.data[0]
        else:
            # Create a new customer
            customer = stripe.Customer.create(
                email=payment_data.email,
                metadata={"source": "docker_fastapi_app"}
            )
            
            # Store customer in Supabase
            supabase.table("customers").insert({
                "email": payment_data.email,
                "stripe_customer_id": customer.id
            }).execute()
        
        # Create a payment intent
        intent = stripe.PaymentIntent.create(
            amount=payment_data.amount,
            currency="usd",
            customer=customer.id,
            automatic_payment_methods={"enabled": True}
        )
        
        return {
            "clientSecret": intent.client_secret,
            "customer": customer.id
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
