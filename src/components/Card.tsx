
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-gray-800 border border-gray-700 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;

export const CardHeader = ({ children, className = '' }: CardProps) => (
  <div className={`px-6 py-4 border-b border-gray-700 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = '' }: CardProps) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
