"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../Actions/Button/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-[99] w-full py-6 px-12 flex justify-between items-center transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}>
      <Image
        src="/img/futr-logo-white.svg"
        alt="FUTR Logo"
        width={147}
        height={30}
        className="mx-auto md:mx-0"
      />
      <div className="hidden md:block">
        <Button href="/register">Join for free</Button>
      </div>
    </div>
  );
}
