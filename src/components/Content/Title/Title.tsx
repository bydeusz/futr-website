import React from "react";

interface TitleProps {
  tag?: string;
  children: React.ReactNode;
}

export default function Title({ tag, children }: TitleProps) {
  const Tag = tag || "h1";

  return <>{React.createElement(Tag, null, children)}</>;
}
