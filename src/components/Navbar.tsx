
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2C]/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">Paage</span>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <a href="#usecases" className="text-gray-300 hover:text-white transition-colors">Use cases</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            </div>
          )}

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {!isMobile && (
              <Button 
                onClick={() => navigate('/login')}
                className="bg-transparent hover:bg-gray-800"
              >
                Login
              </Button>
            )}
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Sign up
            </Button>
            {isMobile && (
              <Button className="md:hidden bg-transparent hover:bg-gray-800">
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
