import Image from "next/image";

interface ColumnProps {
  id?: string;
  position: string;
  image: string;
  children: React.ReactNode;
  height?: number;
  width?: number;
}

export default function Column({
  id,
  position,
  image,
  children,
  height = 500,
  width = 500,
}: ColumnProps) {
  const renderColumnLayout = () => {
    if (position === "left") {
      return (
        <div
          className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-16 space-y-8 lg:space-y-0"
          id={id}>
          <div className="w-full lg:w-1/2 space-y-6">{children}</div>
          <div className="w-full lg:w-1/2 rounded-md">
            <Image src={image} alt="Image" width={height} height={width} />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse space-x-0 lg:space-x-16 space-y-8 lg:space-y-0"
          id={id}>
          <div className="w-full lg:w-1/2 space-y-6">{children}</div>
          <div className="w-full lg:w-1/2 rounded-md">
            <Image src={image} alt="Image" width={height} height={width} />
          </div>
        </div>
      );
    }
  };

  return (
    <section>
      <div className="items-center mx-auto max-w-7xl px-6">
        {renderColumnLayout()}
      </div>
    </section>
  );
}
