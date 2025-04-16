
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RELIHI1JgScKo6e1KBfhVYsNrunegMBCaRdLepaXnOKZ0qc7CLXc9MUasGkhveWSFdLMyyLs28X1rA7z6ZajfTl00PoRsaLz0');

export const createTestPaymentIntent = async (amount: number) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to load');

    // In a real scenario, you'd call your backend endpoint
    const response = await fetch('your-backend-url/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Payment intent creation failed', error);
    return null;
  }
};
