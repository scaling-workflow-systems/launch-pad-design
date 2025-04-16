
interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
}

const Avatar = ({ src, alt, fallback }: AvatarProps) => {
  return (
    <div className="relative inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-700">
      {src ? (
        <img 
          src={src} 
          alt={alt || fallback} 
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center text-white font-medium">
          {fallback[0]}
        </div>
      )}
    </div>
  );
};

export default Avatar;
