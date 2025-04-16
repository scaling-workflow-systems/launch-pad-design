
import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, children, className = '', disabled = false, type = 'button' }: ButtonProps) => (
  <button
    onClick={onClick}
    type={type}
    disabled={disabled}
    className={`px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
  >
    {children}
  </button>
);

export default Button;
