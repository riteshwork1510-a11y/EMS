"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { TrendingDown, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
  {
    icon: TrendingDown,
    title: "Cost Efficient & High ROI",
    description: "Traditional marketing channels like SMS and Email have high costs and low open rates. EasyMsgSender leverages WhatsApp's highly cost-effective API, allowing you to reach customers at a fraction of the cost while achieving 98% open rates.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Zap,
    title: "Unmatched Speed & Automation",
    description: "Unlike manual messaging or legacy CRMs, our platform is built for speed. Automate entire customer journeys, trigger instant replies, and broadcast to 10,000+ contacts simultaneously without any lag.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade Reliability",
    description: "We don't rely on unauthorized web scrapers. EasyMsgSender uses the Official Cloud API, ensuring your business account is 100% secure, compliant, and never at risk of being banned.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  }
];

export function CostEfficiency() {
  return (
    <Section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <AnimationWrapper animation="slideUp">
            <span className="text-primary font-semibold tracking-wider uppercase text-xs mb-2 block">The EMS Advantage</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Why we're better than the rest.
            </h2>
          </AnimationWrapper>
          <AnimationWrapper animation="slideUp" delay={0.1}>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              We've engineered EasyMsgSender to solve the biggest problems businesses face with customer communication: high costs, slow speeds, and low conversions.
            </p>
          </AnimationWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
                <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 h-full">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6", reason.bg, reason.color)}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
