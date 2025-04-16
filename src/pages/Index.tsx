
import { AuthProvider } from "@/hooks/useAuth";
import PaymentForm from "@/components/PaymentForm";

const Index = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Simple Payment Demo
          </h1>
          <div className="max-w-md mx-auto">
            <PaymentForm amount={4999} />
          </div>
        </main>
      </div>
    </AuthProvider>
  );
};

export default Index;
