"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

export function CTA() {
  return (
    <Section className="py-32 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to Grow with EasyMsgSender?
          </h2>
        </AnimationWrapper>
        
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of modern businesses using our platform to automate their WhatsApp marketing and drive massive growth.
          </p>
        </AnimationWrapper>

        <AnimationWrapper animation="slideUp" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-black/20 text-white font-bold rounded-full text-lg backdrop-blur-sm border border-white/20 hover:bg-black/30 transition-all">
              Book Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold rounded-full text-lg hover:underline transition-all">
              Contact Sales
            </button>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-6">
            No credit card required. 14-day free trial.
          </p>
        </AnimationWrapper>
      </div>
    </Section>
  );
}
