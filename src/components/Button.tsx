
import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean; // Add the disabled property
}

const Button = ({ onClick, children, className = '', type = "button", disabled }: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
