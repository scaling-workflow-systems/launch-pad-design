
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [showPayment, setShowPayment] = useState(false);

  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:8000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'guest@example.com',
          amount: 0
        })
      });

      if (!response.ok) throw new Error('Payment failed');
      
      toast.success('Thank you for your interest!');
      setShowPayment(false);
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed top-4 right-4">
        <Button 
          onClick={() => setShowPayment(true)}
          className="bg-[#9b87f5] hover:bg-[#7E69AB]"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Sign Up
        </Button>
      </div>

      <main className="container mx-auto px-4">
        <section className="py-20 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Next-Gen Payment Solution
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl text-center">
            Experience seamless transactions with our cutting-edge payment processing system.
          </p>
          
          {showPayment && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="mb-6 text-gray-300">Click below to proceed with the sign-up process.</p>
                <Button 
                  onClick={handlePayment} 
                  className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] mb-4"
                >
                  Continue to Sign Up
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowPayment(false)}
                  className="w-full"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          <div className="mt-12 text-gray-400">
            Contact: support@email.com
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
