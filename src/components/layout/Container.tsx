interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-6xl px-6 md:px-16 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}