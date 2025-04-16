
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/hooks/useAuth";
import PaymentModal from "@/components/PaymentModal";

const Index = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Hero />
        <Features />
        <div className="container mx-auto my-12">
          <PaymentModal 
            amount={4999} 
            productName="Test Product" 
          />
        </div>
        <Testimonials />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Index;
