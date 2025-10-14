// Simple link component - can be replaced with react-router Link if needed
interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ href, children, className = '' }: LinkProps) => {
  return (
    <a 
      href={href} 
      className={`hover:text-primary-600 transition-colors ${className}`}
    >
      {children}
    </a>
  );
};
