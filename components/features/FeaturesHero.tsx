"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

export function FeaturesHero() {
  return (
    <Section className="pt-20 md:pt-32 pb-16 bg-muted/20">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
        <AnimationWrapper animation="slideUp">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Features designed for <span className="text-primary">growth</span>.
          </h1>
        </AnimationWrapper>
        
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover all the tools you need to build, automate, and scale your customer communication strategy from one unified platform.
          </p>
        </AnimationWrapper>
      </div>
    </Section>
  );
}
