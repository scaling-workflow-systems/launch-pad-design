
import { AuthProvider } from "@/hooks/useAuth";
import PaymentForm from "@/components/PaymentForm";
import Button from "@/components/Button";
import { CreditCard } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [showPayment, setShowPayment] = useState(false);
  const isMobile = useIsMobile();

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Fixed Payment Button */}
        <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'top-4 right-4'} z-50`}>
          <Button onClick={() => setShowPayment(true)} className={isMobile ? 'w-full' : ''}>
            <div className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              Sign Up
            </div>
          </Button>
        </div>

        {/* Landing Page Content */}
        <main className="container mx-auto px-4">
          <section className="py-20 flex flex-col items-center justify-center min-h-screen">
            <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600`}>
              Next-Gen Payment Solution
            </h1>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-300 mb-12 max-w-2xl text-center`}>
              Experience seamless transactions with our cutting-edge payment processing system.
            </p>
            
            <div className={`w-full max-w-4xl ${isMobile ? 'h-[200px]' : 'h-[400px]'} rounded-xl bg-gray-800 flex items-center justify-center`}>
              <p className="text-gray-400">Product Demo</p>
            </div>

            <div className="mt-12 text-gray-400">
              Email us at: support@email.com
            </div>
          </section>
        </main>

        {/* Payment Modal */}
        {showPayment && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className={`bg-gray-800 p-8 rounded-xl ${isMobile ? 'w-full mx-4' : 'max-w-md w-full'}`}>
              <PaymentForm amount={0} />
              <Button 
                onClick={() => setShowPayment(false)}
                className="mt-4 bg-gray-700 hover:bg-gray-600"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </AuthProvider>
  );
};

export default Index;
