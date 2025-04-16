
import Button from '@/components/Button';
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 py-16 mx-auto text-center relative z-10">
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Transform Your Ideas Into Reality
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Create beautiful, responsive websites with our powerful platform. Start building your next project today.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="glass hover:bg-purple-500/20 transition-all duration-300 text-lg px-8 py-3">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="bg-transparent border border-white/20 hover:bg-white/5 transition-all duration-300 text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
