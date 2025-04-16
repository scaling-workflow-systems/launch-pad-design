
import Card, { CardContent } from '@/components/Card';
import Avatar from '@/components/Avatar';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    content: "The best platform I've used for building websites. It's intuitive and powerful.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Developer",
    content: "Incredible features and amazing support. Can't imagine working without it.",
    image: "/placeholder.svg"
  },
  {
    name: "Emma Davis",
    role: "Designer",
    content: "A game-changer for our team's workflow. Highly recommended!",
    image: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    fallback={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
