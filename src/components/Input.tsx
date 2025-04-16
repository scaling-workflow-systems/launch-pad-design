
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, className = '', ...props }: InputProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-200">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md 
          text-white placeholder-gray-400 focus:outline-none focus:ring-2 
          focus:ring-purple-500 focus:border-transparent
          ${error ? 'border-red-500' : ''} 
          ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
