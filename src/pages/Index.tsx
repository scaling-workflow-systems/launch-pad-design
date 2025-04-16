
import { AuthProvider } from "@/hooks/useAuth";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "@/components/Navbar";
import FeatureCards from "@/components/FeatureCards";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        
        {/* Home Section */}
        <section id="home" className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600`}>
              Build Something Amazing
            </h1>
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-300 mb-12 max-w-2xl mx-auto text-center`}>
              Create beautiful, responsive websites with our powerful platform.
            </p>
          </div>
        </section>

        {/* Features Section (already exists) */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Key Features
          </h2>
          <FeatureCards />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Pricing Plans
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Choose the perfect plan for your needs
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Find answers to common questions
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Us
            </h2>
            <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
              We're dedicated to providing the best development tools and resources for developers around the world.
            </p>
          </div>
        </section>

        <div className="py-12 text-center text-gray-400">
          Email us at: support@email.com
        </div>
      </div>
    </AuthProvider>
  );
};

export default Index;
