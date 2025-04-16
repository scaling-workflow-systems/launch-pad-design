
import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className = '' }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors ${className}`}
  >
    {children}
  </button>
);

export default Button;
