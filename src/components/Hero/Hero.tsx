import Subtitle from "@components/Content/Subtitle/Subtitle";
import Title from "@components/Content/Title/Title";
import Text from "@components/Content/Text/Text";
import Button from "@components/Actions/Button/Button";

export default function Hero() {
  return (
    <div
      className="h-screen bg-black w-full flex items-center justify-center overflow-hidden relative"
      id="home">
      <div className="flex-row items-center justify-center text-center z-50 space-y-8 w-full lg:w-2/4 px-6">
        <Subtitle>Meet futr</Subtitle>
        <Title tag="h1">
          Control Your Game, <br />
          Own Your <span className="text-futr-red">Future.</span>
        </Title>
        <Text>
          Take charge of your football career in just one click. With FUTR, you
          manage your own contracts—no agents, no hassle. Shape your future on
          your own terms.
        </Text>
        <Button href="/register">Join for free.</Button>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-futr-black opacity-80 z-40"></div>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-30"
        src="/video/intro.mp4"
        autoPlay
        loop
        muted></video>
    </div>
  );
}
