import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedProjects from "@/components/FeaturedProjects";
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
            "Property Development",
            "Acquire · Transform · Sell",
            "Lagos, Nigeria",
            "Investor Partnerships",
            "Building Since 2021",
          ]}
        />
      </div>
      <FeaturedProjects />
      <Editorial />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
