import Image from "next/image";

interface UspProps {
  id?: string;
  children: React.ReactNode;
  list: {
    _uid: string;
    title: string;
    description: string;
  }[];
}

export default function Usp({ id, children, list }: UspProps) {
  return (
    <section id={id}>
      <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="w-full xl:w-1/2 space-y-6 px-6 xl:px-32">
          {children}
        </div>
        <div className="w-full lg:w-1/2 bg-futr-red text-white p-6 xl:py-32 xl:px-32 space-y-6">
          {list.map((item, index) => (
            <div key={index} className="flex text-futr-black space-x-2">
              <div className="w-[50px] h-[50px]">
                <Image
                  src="/img/futr-arrow.svg"
                  alt="FUTR Icon"
                  width={30}
                  height={30}
                  className="text-white"
                />
              </div>
              <div>
                <h3 className="text-3xl">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
