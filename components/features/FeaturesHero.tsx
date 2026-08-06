"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

export function FeaturesHero() {
  return (
    <Section className="pt-12 md:pt-20 pb-16 bg-white relative overflow-hidden">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 relative z-10">
        <AnimationWrapper animation="slideUp">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-slate-500 bg-slate-100 mb-6">
            Powerful Platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Features designed for growth.
          </h1>
        </AnimationWrapper>
        
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Discover all the tools you need to build, automate, and scale your customer communication strategy from one unified platform.
          </p>
        </AnimationWrapper>
      </div>
    </Section>
  );
}
