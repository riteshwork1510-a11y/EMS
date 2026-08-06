"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

export function CTA() {
  return (
    <Section className="py-32 bg-slate-900 relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to Grow with EasyMsgSender?
          </h2>
        </AnimationWrapper>
        
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of modern businesses using our platform to automate their WhatsApp marketing and drive massive growth.
          </p>
        </AnimationWrapper>

        <AnimationWrapper animation="slideUp" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-full text-lg hover:bg-slate-100 transition-colors">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold rounded-full text-lg hover:bg-slate-700 transition-colors">
              Book Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-slate-300 font-bold rounded-full text-lg hover:text-white transition-colors">
              Contact Sales
            </button>
          </div>
          <p className="text-sm text-slate-400 mt-6">
            No credit card required. 14-day free trial.
          </p>
        </AnimationWrapper>
      </div>
    </Section>
  );
}
