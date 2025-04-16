
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`glass rounded-xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;

export const CardHeader = ({ children, className = '' }: CardProps) => (
  <div className={`p-6 border-b border-white/10 ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = '' }: CardProps) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
