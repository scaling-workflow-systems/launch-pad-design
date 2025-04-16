
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2C]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">DevStudio</span>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button className="md:hidden p-2 rounded-md hover:bg-gray-800">
              <Menu className="h-5 w-5 text-white" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
