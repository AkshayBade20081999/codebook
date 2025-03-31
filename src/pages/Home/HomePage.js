import { useTitle } from "../../hooks/useTitle";
import { Faq } from "./components/Faq";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Hero } from "./components/Hero";
import { Testimonals } from "./components/Testimonals";

export const HomePage = () => {
  useTitle("Homepage");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonals />
      <Faq />
    </main>
  );
};
