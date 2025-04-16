
import Card from './Card';
import { Layout, FileText, Image, LayoutGrid } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: <Layout className="h-6 w-6 text-purple-400" />,
      title: "Responsive Design",
      description: "Create beautiful layouts that work on any device"
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-400" />,
      title: "Rich Content",
      description: "Support for all types of content and media"
    },
    {
      icon: <Image className="h-6 w-6 text-purple-400" />,
      title: "Media Library",
      description: "Organize and manage your media assets"
    },
    {
      icon: <LayoutGrid className="h-6 w-6 text-purple-400" />,
      title: "Component Library",
      description: "Pre-built components for rapid development"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {features.map((feature, index) => (
        <Card key={index} className="p-6 hover:bg-gray-700/50 transition-colors cursor-pointer">
          <div className="flex flex-col items-center text-center space-y-4">
            {feature.icon}
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeatureCards;
