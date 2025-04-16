
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';
import { createTestPaymentIntent } from '@/utils/stripeUtils';

interface PaymentFormProps {
  amount: number;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount = 0 }) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateCardNumber = (cardNumber: string) => {
    // Basic validation: 16 digits, numbers only
    const cardRegex = /^[0-9]{16}$/;
    return cardRegex.test(cardNumber.replace(/\s/g, ''));
  };

  const validateExpiry = (expiry: string) => {
    // Format: MM/YY
    const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!expiryRegex.test(expiry)) return false;

    const [month, year] = expiry.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    const expiryYear = parseInt(year);
    const expiryMonth = parseInt(month);

    if (expiryYear < currentYear) return false;
    if (expiryYear === currentYear && expiryMonth < currentMonth) return false;
    return true;
  };

  const validateCVC = (cvc: string) => {
    // 3 or 4 digits
    const cvcRegex = /^[0-9]{3,4}$/;
    return cvcRegex.test(cvc);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!cardNumber) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }

    if (!expiry) {
      newErrors.expiry = 'Expiry date is required';
    } else if (!validateExpiry(expiry)) {
      newErrors.expiry = 'Please enter a valid expiry date (MM/YY)';
    }

    if (!cvc) {
      newErrors.cvc = 'CVC is required';
    } else if (!validateCVC(cvc)) {
      newErrors.cvc = 'Please enter a valid CVC (3-4 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please correct the form errors');
      return;
    }
    
    setLoading(true);
    setErrors({});
    
    try {
      const response = await fetch('http://localhost:8000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount: amount || 0,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Payment failed. Please try again.');
      }
      
      const data = await response.json();
      console.log("Payment intent created:", data);
      
      setShowSuccess(true);
      toast.success('Payment successful!');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment processing failed';
      toast.error(errorMessage);
      setErrors({ submit: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CreditCard className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-green-500 mb-2">Payment Successful!</h2>
            <p className="text-gray-400">
              Thank you for your payment. You will receive a confirmation email shortly.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl text-center">
          Sign Up - ${(amount / 100).toFixed(2)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-gray-700 border-gray-600 text-white ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="card">Card Number*</Label>
            <Input
              id="card"
              type="text"
              required
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
              maxLength={16}
              className={`bg-gray-700 border-gray-600 text-white ${
                errors.cardNumber ? 'border-red-500' : ''
              }`}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm">{errors.cardNumber}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry*</Label>
              <Input
                id="expiry"
                type="text"
                required
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length >= 2) {
                    value = value.slice(0, 2) + '/' + value.slice(2, 4);
                  }
                  setExpiry(value);
                }}
                maxLength={5}
                className={`bg-gray-700 border-gray-600 text-white ${
                  errors.expiry ? 'border-red-500' : ''
                }`}
              />
              {errors.expiry && (
                <p className="text-red-500 text-sm">{errors.expiry}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC*</Label>
              <Input
                id="cvc"
                type="text"
                required
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                maxLength={4}
                className={`bg-gray-700 border-gray-600 text-white ${
                  errors.cvc ? 'border-red-500' : ''
                }`}
              />
              {errors.cvc && (
                <p className="text-red-500 text-sm">{errors.cvc}</p>
              )}
            </div>
          </div>
          {errors.submit && (
            <div className="text-red-500 text-sm">{errors.submit}</div>
          )}
          <div className="text-xs text-gray-400 mt-4">
            By submitting this form, you agree to share your email for marketing purposes. 
            Payment processing is securely handled by Stripe. Your payment information 
            is encrypted and never stored on our servers.
          </div>
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700"
            disabled={loading}
          >
            {loading ? "Processing..." : "Sign Up"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
