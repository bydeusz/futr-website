interface TextProps {
  children: React.ReactNode;
}

export default function Text({ children }: TextProps) {
  return (
    <div className="font-grotesk font-light text-xl leading-8 tracking-wide">
      {children}
    </div>
  );
}
