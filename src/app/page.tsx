import Hero from "@/components/Hero/Hero";
import Column from "@/components/Column/Column";
import Usp from "@/components/Usp/Usp";
import Button from "@/components/Actions/Button/Button";

import { brandData } from "@/data/brands";
import { uspData } from "@/data/usp";
import Header from "@/components/Header/Header";
import HowTo from "@/components/HowTo/HowTo";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <Column
        position="left"
        image="/img/voetballer-1.jpg"
        height={736}
        width={550}>
        <h2>
          At FUTR, we're here to transform the game for athletes, clubs, and
          brands alike.
        </h2>
        <div className="w-3/4 ml-auto pt-24 space-y-6">
          <p>
            Our platform is designed to bring control and transparency to
            everyone involved.
          </p>

          <p>
            Born from the vision of passionate entrepreneurs who recognized the
            lack of transparency in the football industry, our brand is driven
            by the need to put athletes and clubs back in the driver’s seat.{" "}
          </p>

          <p>We knew it was time for change.</p>
        </div>
      </Column>
      <Column
        position="right"
        image="/img/voetballer-2.jpg"
        height={525}
        width={525}>
        <div className="space-y-6">
          <p>
            They united with a mission to build a platform that connects
            athletes, clubs, and brands in an entirely new way. Our vision? To
            reshape the football business and unlock limitless opportunities for
            transfers and commercial deals. Our mission? To offer a cutting-edge
            platform that makes transactions, collaborations, and partnerships
            seamless.
          </p>

          <p>
            Why partner with us? Because we put you in control, empowering you
            to make your own decisions while efficiently reaching your goals.
            Whether you're an athlete seeking new opportunities, a club looking
            for talent or partnerships, or a brand eager to make an impact in
            the sports world, we're here to help you succeed.
          </p>

          <p>
            Join us on this game-changing journey and let’s rewrite the playbook
            together. FUTR—where football and business collide in the most epic
            way. 🚀⚽🔥
          </p>
        </div>
      </Column>
      <Usp list={uspData}>
        <h2>As FUTR, we can offer the following benefits to athletes</h2>
        <p>
          We aim to bring transparency to the football industry, leaving a
          lasting legacy by creating a fair play model and leading the way in a
          new era of representation.
        </p>
        <Button href="#">start onboarding now!</Button>
      </Usp>
      <Header />
      <HowTo />
      <Pricing />
    </main>
  );
}
