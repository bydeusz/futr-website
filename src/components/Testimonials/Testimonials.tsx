"use client";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    const onSelect = () => {
      if (!emblaApi) return;
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };

    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="flex justify-end p-4 space-x-2">
        <button
          className="border-2 rounded-full p-[10px] border-white transition-all duration-200 hover:bg-futr-red hover:text-futr-black hover:border-futr-red"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}>
          <ArrowLeftIcon className="w-4 h-4" />
        </button>
        <button
          className="border-2 rounded-full p-[10px] border-white transition-all duration-200 hover:bg-futr-red hover:text-futr-black hover:border-futr-red"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}>
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="embla" ref={emblaRef} id="testimonials">
        <div className="embla__container">
          {testimonialsData.map((item) => (
            <div className="embla__slide" key={item._uid}>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="space-y-8 p-12 lg:p-32">
                  <h3 className="text-2xl md:text-4xl">{item.description}</h3>
                  <p>
                    {item.name} - {item.title}
                  </p>
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
          ))}
        </div>
      </div>
    </div>
  );
}
