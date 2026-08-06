"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_COMPARISON } from "@/mock/whatsapp-pricing/comparison";
import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { cn } from "@/lib/utils";

export function PricingComparison() {
  return (
    <Section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        <div className="text-center mb-16">
          <AnimationWrapper animation="slideUp">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Compare <span className="text-primary">Plans</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              A detailed breakdown of features across all our WhatsApp API plans.
            </p>
          </AnimationWrapper>
        </div>

        <AnimationWrapper animation="slideUp" delay={0.2} className="overflow-x-auto custom-scrollbar pb-6">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-5 gap-4 mb-4 pb-4 border-b border-slate-200">
              <div className="col-span-1 font-semibold text-slate-900 text-sm">Features</div>
              <div className="col-span-1 font-semibold text-slate-900 text-center text-sm">Starter</div>
              <div className="col-span-1 font-bold text-primary text-center text-sm relative">
                Business
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-primary uppercase tracking-wider">Most Popular</span>
              </div>
              <div className="col-span-1 font-semibold text-slate-900 text-center text-sm">Professional</div>
              <div className="col-span-1 font-semibold text-slate-900 text-center text-sm">Enterprise</div>
            </div>

            {PRICING_COMPARISON.map((row, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-5 gap-4 py-4 border-b border-slate-100"
              >
                <div className="col-span-1 font-medium text-slate-700 text-sm flex items-center">
                  {row.feature}
                </div>
                <div className="col-span-1 text-slate-500 text-sm text-center flex items-center justify-center">
                  {row.starter === "-" ? <span className="text-slate-300">-</span> : row.starter}
                </div>
                <div className="col-span-1 text-slate-900 font-semibold text-sm text-center flex items-center justify-center">
                  {row.business === "-" ? <span className="text-slate-300">-</span> : row.business}
                </div>
                <div className="col-span-1 text-slate-500 text-sm text-center flex items-center justify-center">
                  {row.professional === "-" ? <span className="text-slate-300">-</span> : row.professional}
                </div>
                <div className="col-span-1 text-slate-500 text-sm text-center flex items-center justify-center">
                  {row.enterprise === "-" ? <span className="text-slate-300">-</span> : row.enterprise}
                </div>
              </div>
            ))}
          </div>
        </AnimationWrapper>
      </div>
    </Section>
  );
}
