
import { useState } from "react";
import { CreditCard } from "lucide-react";

const Index = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [email, setEmail] = useState("");

  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:8000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email || 'guest@example.com',
          amount: 0
        })
      });

      if (!response.ok) throw new Error('Payment failed');
      alert('Thank you for your interest!');
      setShowPayment(false);
    } catch (error) {
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed top-4 right-4">
        <button 
          onClick={() => setShowPayment(true)}
          className="inline-flex items-center px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Sign Up
        </button>
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
                <p className="mb-6 text-gray-300">Enter your email to proceed with the sign-up process.</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                />
                <button 
                  onClick={handlePayment}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded mb-4 transition-colors"
                >
                  Continue to Sign Up
                </button>
                <button 
                  onClick={() => setShowPayment(false)}
                  className="w-full bg-transparent hover:bg-gray-700 text-white py-2 px-4 rounded border border-gray-600 transition-colors"
                >
                  Cancel
                </button>
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
