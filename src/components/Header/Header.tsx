import Subtitle from "../Content/Subtitle/Subtitle";

export default function Header() {
  return (
    <div className="pt-24 w-full text-center space-y-4">
      <Subtitle>4 easy steps</Subtitle>
      <h2 className="text-4xl font-bold">
        This is how <br />
        futr <span className="text-futr-red">works.</span>
      </h2>
    </div>
  );
}
