
import { Shield, Zap, Heart, Star } from "lucide-react";
import Card, { CardContent } from '@/components/Card';

const features = [
  {
    icon: Shield,
    title: "Secure",
    description: "Built with security in mind from the ground up",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and performance",
  },
  {
    icon: Heart,
    title: "User Friendly",
    description: "Designed with the user experience in mind",
  },
  {
    icon: Star,
    title: "Feature Rich",
    description: "Packed with all the features you need",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent>
                <div className="rounded-full bg-purple-900/50 p-3 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
