import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full py-6 px-12 flex justify-between items-center">
      <Image
        src="/img/futr-logo-white.svg"
        alt="FUTR Logo"
        width={147}
        height={30}
        className="mx-auto md:mx-0"
      />
      <Link
        className="hidden md:inline-flex bg-futr-red text-futr-black font-grotesk uppercase font-bold tracking-wide text-xl py-4 px-6 items-center"
        href="/register">
        <Image
          src="/icons/futr-arrow.svg"
          alt="FUTR Arrow icon"
          className="mr-2"
          width={15}
          height={15}
        />
        Sign up
      </Link>
    </div>
  );
}
