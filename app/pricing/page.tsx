import { MinimalPricingCards } from "@/components/pricing/MinimalPricingCards";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { Section } from "@/components/common/Section";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "WhatsApp API Pricing | EasyMsgSender",
  description: "Transparent, usage-based pricing for WhatsApp Business API. Scale your messaging with our powerful automation platform.",
};

export default function PricingPage() {
  return (
    <main className="flex flex-col w-full">
      <Section className="pb-12 pt-6 md:pt-10 bg-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
          <div className="text-center mb-12">
            <AnimationWrapper animation="slideUp">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-slate-500 bg-slate-100 mb-6">
                Transparent Pricing
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Scale your WhatsApp ROI.
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Pay only for what you use. Our enterprise-grade API plans are designed to grow with your business without locking you in.
              </p>
            </AnimationWrapper>
          </div>

          <AnimationWrapper animation="slideUp" delay={0.2}>
            <MinimalPricingCards />
          </AnimationWrapper>
        </div>
      </Section>

      <PricingComparison />
    </main>
  );
}
