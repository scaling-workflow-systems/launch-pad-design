
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RELIHI1JgScKo6e1KBfhVYsNrunegMBCaRdLepaXnOKZ0qc7CLXc9MUasGkhveWSFdLMyyLs28X1rA7z6ZajfTl00PoRsaLz0');

export const createTestPaymentIntent = async (amount: number, email: string) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to load');

    // Call our FastAPI backend instead of directly using Stripe
    const response = await fetch('http://localhost:8000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Payment intent creation failed');
    }

    const data = await response.json();
    
    // In a real implementation, you would use Stripe.js to confirm the payment
    // using the clientSecret from the data
    
    return data;
  } catch (error) {
    console.error('Payment intent creation failed', error);
    return null;
  }
};
