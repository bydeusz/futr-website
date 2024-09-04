import Hero from "@/components/Hero/Hero";
import Brands from "@/components/Brands/Brands";
import Column from "@/components/Column/Column";
import Usp from "@/components/Usp/Usp";
import Button from "@/components/Actions/Button/Button";

import { brandData } from "@/data/brands";
import { uspData } from "@/data/usp";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <Brands data={brandData} />
      <Column
        position="left"
        image="/img/voetballer-1.jpg"
        height={736}
        width={550}>
        <h2>
          At FUTR, we're all about revolutionising the game for athletes, clubs,
          and commercial brands.
        </h2>
        <div className="w-3/4 ml-auto pt-24 space-y-6">
          <p>
            Our transactional platform is here to deliver control and
            transparency to everyone involved.
          </p>
          <p>
            Our brand story is fueled by a crew of passionate entrepreneurs who
            saw the challenges of doing transparent business in the football
            industry, athletes and clubs not sitting in the driver seat and knew
            they had to make a change.
          </p>
        </div>
      </Column>
      <Column
        position="right"
        image="/img/voetballer-2.jpg"
        height={525}
        width={525}>
        <div className="space-y-6">
          <p>
            They came together with a mission to create a platform that connects
            athletes, clubs, and brands directly in a whole new way. Our vision?
            To transform the football business landscape and unlock endless
            opportunities for transfers and and commercial deals. Our mission?
            To provide a cutting-edge platform that enables seamless
            transactions, collaborations, and partnerships. So, why do business
            with us? Because we're all about giving you control of your own
            decisions and efficiently helping realize goals. We're here to help
            you thrive, whether you're an athlete looking for new opportunities,
            a club seeking partnerships or a new player, or a commercial brand
            ready to make a splash in the sports world.
          </p>

          <p>
            Join us on this epic journey and let's rewrite the rules of the game
            together. FUTR, where football and business collide in the most epic
            way imaginable. 🚀⚽🔥
          </p>
        </div>
      </Column>
      <Usp list={uspData}>
        <h2>As FUTR, we can offer the following benefits to athletes</h2>
        <p>
          Access to sponsorship opportunities, exposure to a wideraudience, and
          tools for personal branding and career development.
        </p>
        <Button href="#">start onboarding now!</Button>
      </Usp>
      <Header />
    </main>
  );
}
