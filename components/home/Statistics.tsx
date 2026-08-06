"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "2B+", label: "Messages Sent Monthly" },
  { value: "190+", label: "Countries Supported" },
  { value: "<50ms", label: "Average Latency" },
];

export function Statistics() {
  return (
    <Section className="border-y bg-background">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border">
        {stats.map((stat, index) => (
          <AnimationWrapper 
            key={index} 
            animation="scale" 
            delay={index * 0.1}
            className="flex flex-col items-center justify-center text-center first:border-l-0"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              {stat.value}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              {stat.label}
            </p>
          </AnimationWrapper>
        ))}
      </div>
    </Section>
  );
}
