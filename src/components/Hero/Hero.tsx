import Subtitle from "@components/Content/Subtitle/Subtitle";
import Title from "@components/Content/Title/Title";
import Text from "@components/Content/Text/Text";
import Button from "@components/Actions/Button/Button";

export default function Hero() {
  return (
    <div className="h-screen bg-black w-full flex items-center justify-center overflow-hidden relative">
      <div className="flex-row items-center justify-center text-center z-50 space-y-8 w-full lg:w-2/4 px-6">
        <Subtitle>HEY ATHLETE!</Subtitle>
        <Title tag="h1">
          Start monitizing your audience,{" "}
          <span className="text-futr-red">NOW!</span>
        </Title>
        <Text>
          Control your full potential with FUTR, a platform designed exclusively
          for athletes. Connect with brands, showcase your achievements and get
          offers from new clubs directly, and take your career to new heights.
        </Text>
        <Button href="/register">Join now it's free.</Button>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-futr-black opacity-80 z-40"></div>

      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover filter grayscale z-30 scale-[350%] md:scale-[200%] xl:scale-110"
        src="https://www.youtube.com/embed/JhJuwnID3Zw?autoplay=1&controls=0&mute=1&loop=1&playlist=JhJuwnID3Zw&modestbranding=1&showinfo=0&rel=0&start=3"
        allow="autoplay; encrypted-media"
        allowFullScreen></iframe>
    </div>
  );
}
