import Hero from "@/components/Hero/Hero";
import Brands from "@/components/Brands/Brands";

import { brandData } from "@/data/brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands data={brandData} rotation="normal" />
    </main>
  );
}
