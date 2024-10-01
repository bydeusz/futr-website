import Subtitle from "@components/Content/Subtitle/Subtitle";
import Title from "@components/Content/Title/Title";
import Text from "@components/Content/Text/Text";
import Button from "@components/Actions/Button/Button";

export default function UnderConstruction() {
  return (
    <div
      className="h-screen bg-black w-full flex items-center justify-center overflow-hidden relative"
      id="home">
      <div className="flex-row items-center justify-center text-center z-50 space-y-8 w-full lg:w-2/4 px-6">
        <Subtitle>registration</Subtitle>
        <Title tag="h1">
          Under <br /> <span className="text-futr-red">Construction.</span>
        </Title>
        <Text>
          You are not able to register yet. We are working hard to bring you the
          best onboarding experience. Please come back later.
        </Text>
        <Button href="/">Back home</Button>
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
