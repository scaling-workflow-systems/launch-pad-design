import React, { useState } from 'react';
import Button from '@/components/Button';
import { createTestPaymentIntent } from '@/utils/stripeUtils';
import { Package, Clock } from 'lucide-react';

interface PaymentModalProps {
  amount: number;
  productName: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ amount, productName }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handlePaymentSubmit = async () => {
    const paymentIntent = await createTestPaymentIntent(amount, 'guest@example.com');
    
    if (paymentIntent) {
      setShowComingSoon(true);
    }
  };

  if (showComingSoon) {
    return (
      <div className="text-center p-6 bg-yellow-50 rounded-lg">
        <div className="flex justify-center mb-4">
          <Package className="h-12 w-12 text-yellow-500 mr-2" />
          <Clock className="h-12 w-12 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold text-yellow-700 mb-2">Coming Soon!</h2>
        <p className="text-yellow-600">
          Thank you for your interest in {productName}. 
          This product is currently being developed.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{productName}</h2>
      <p className="mb-4">Test Payment Amount: ${amount / 100}</p>
      <Button 
        onClick={handlePaymentSubmit} 
        className="w-full bg-green-500 hover:bg-green-600"
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default PaymentModal;
