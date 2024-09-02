import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex bg-futr-red text-futr-black font-grotesk uppercase font-bold tracking-wide text-xl py-4 px-6 items-center hover:bg-futr-white transition-all">
      <Image
        src="/icons/futr-arrow.svg"
        alt="FUTR Arrow icon"
        className="mr-2"
        width={15}
        height={15}
      />
      {children}
    </Link>
  );
}
