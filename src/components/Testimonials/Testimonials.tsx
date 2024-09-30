"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="space-y-8 p-12 lg:p-32">
              <h3 className="text-2xl md:text-4xl">
                Thanks to FUTR, I was able to manage my own affairs. With the
                tools and support the platform offers, I negotiated my contract
                with Hoogstraten on my own.
              </h3>
              <p>Kevin Silva - Hoogstraten</p>
            </div>
            <div className="relative aspect-square bg-white overflow-hidden">
              <Image
                src="/img/kevin-silva.png"
                alt="Kevin Silva"
                width={800}
                height={800}
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
