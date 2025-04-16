
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import stripe
import os
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

class PaymentIntent(BaseModel):
    email: str
    amount: int

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

