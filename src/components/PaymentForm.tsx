
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

interface PaymentFormProps {
  amount: number;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment success
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
          Payment Details - ${amount / 100}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
            <Input
              type="text"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Pay Now
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
