import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Statistics } from "@/components/home/Statistics";
import { Benefits } from "@/components/home/Benefits";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Statistics />
      <Features />
      <Benefits />
      <Testimonials />
      <PricingPreview />
      <FAQ />
    </div>
  );
}
