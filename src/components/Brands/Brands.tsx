import Image from "next/image";

interface MarqueeProps {
  data: any[];
}

export default function Brands({ data }: MarqueeProps) {
  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute top-0 left-0 h-full w-64 z-50 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute top-0 right-0 h-full w-64 z-50 bg-gradient-to-l from-black to-transparent"></div>

      <div className="relative flex overflow-x-hidden px-8">
        <div className="whitespace-nowrap flex">
          {data.map((item: any) => (
            <Image
              key={item._uid}
              src={item.url}
              alt={item.text}
              width={160}
              height={40}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
