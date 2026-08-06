import { MinimalPricingCards } from "@/components/pricing/MinimalPricingCards";
import { WhatsAppSimulator } from "@/components/pricing/WhatsAppSimulator";
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
      <Section className="pb-12 pt-12 md:pt-20 bg-white relative overflow-hidden">
        
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

      <WhatsAppSimulator />

      <PricingComparison />
      <PricingFAQ />

      {/* CTA Section */}
      <Section className="py-24 bg-white relative overflow-hidden border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimationWrapper animation="scale">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Ready to automate your <span className="text-primary">growth?</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Join thousands of businesses scaling their customer engagement with EasyMsgSender. Start your free 14-day trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white font-bold text-base rounded-xl px-8 py-4 hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgb(217,4,41,0.25)] hover:shadow-[0_6px_20px_rgba(217,4,41,0.35)] active:scale-95">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                Talk to Sales
              </button>
            </div>
          </AnimationWrapper>
        </div>
      </Section>
    </main>
  );
}
