
import Button from '@/components/Button';
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900">
      <div className="container px-4 py-16 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Ideas Into Reality
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Create beautiful, responsive websites with our powerful platform. Start building your next project today.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="flex items-center">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-600">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
