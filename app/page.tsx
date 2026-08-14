import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Benefits } from "@/components/home/Benefits";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Benefits />
      <PricingPreview />
      <FAQ />
    </div>
  );
}
