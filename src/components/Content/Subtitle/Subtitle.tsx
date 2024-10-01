interface SubtitleProps {
  children: React.ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <div className="font-grotesk uppercase text-sm font-bold opacity-70 tracking-widest">
      {children}
    </div>
  );
}
