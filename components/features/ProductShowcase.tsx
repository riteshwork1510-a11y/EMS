"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { InteractiveShowcase } from "./showcase/InteractiveShowcase";

export function ProductShowcase() {
  return (
    <Section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="flex flex-col items-center text-center space-y-4 mb-12 max-w-4xl mx-auto">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Experience the platform
          </h2>
        </AnimationWrapper>
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <p className="text-lg text-slate-500 leading-relaxed">
            Interact with our live product demo to see how EasyMsgSender helps businesses manage contacts, launch WhatsApp campaigns, automate conversations and monitor performance—all without signing in.
          </p>
        </AnimationWrapper>
      </div>

      <AnimationWrapper animation="scale" delay={0.2} className="w-full">
        <InteractiveShowcase />
      </AnimationWrapper>
    </Section>
  );
}
