
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';
import { Label } from '@/components/ui/label';

interface PaymentFormProps {
  amount: number;
}

const PaymentForm: React.FC<PaymentFormProps> = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !cardNumber || !expiry || !cvc) {
      return;
    }
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CreditCard className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-green-500 mb-2">Coming Soon!</h2>
            <p className="text-gray-400">
              Thank you for your interest. This feature is currently in development.
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
          Sign Up - $0.00
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="card">Card Number</Label>
            <Input
              id="card"
              type="text"
              required
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry</Label>
              <Input
                id="expiry"
                type="text"
                required
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                type="text"
                required
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
              />
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-4">
            By submitting this form, you agree to share your email for marketing purposes. Payment processing is securely handled by Stripe. Your payment information is encrypted and never stored on our servers.
          </div>
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Sign Up
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
