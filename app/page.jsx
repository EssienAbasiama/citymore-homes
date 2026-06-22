import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedProperties from "@/components/FeaturedProperties";
import Editorial from "@/components/Editorial";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="border-y border-ink/10 bg-bone-light py-6 text-ink">
        <Marquee
          items={[
            "Curated Listings",
            "White-Glove Service",
            "Lagos · Abuja",
            "Refined Living",
            "Trusted Since 2021",
          ]}
        />
      </div>
      <FeaturedProperties />
      <Editorial />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
