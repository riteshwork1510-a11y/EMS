"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { Zap, Users, Brain, BarChart, CalendarClock, LayoutTemplate } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Zap,
    title: "One Click Campaigns",
    description: "Launch massive broadcast campaigns to thousands of contacts with a single click. No more manual sending.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: Users,
    title: "Bulk Contact Management",
    description: "Easily import, segment, and manage large contact lists using smart tags and dynamic groups.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Brain,
    title: "AI Ready Architecture",
    description: "Built for the future. Seamlessly integrate AI chatbots to handle common queries and qualify leads.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: BarChart,
    title: "Campaign Analytics",
    description: "Track deliveries, read receipts, and conversion rates in real-time with our intuitive dashboard.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: CalendarClock,
    title: "Broadcast Scheduling",
    description: "Plan your marketing ahead of time. Schedule messages for the perfect moment across timezones.",
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    icon: LayoutTemplate,
    title: "Smart Templates",
    description: "Save time with highly converting pre-approved message templates for every business scenario.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  }
];

export function ProductHighlights() {
  return (
    <Section className="bg-white py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <AnimationWrapper animation="slideUp">
             <span className="text-primary font-semibold tracking-wider uppercase text-xs mb-2 block">Platform Highlights</span>
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 max-w-2xl">
               Everything you need to grow your audience.
             </h2>
          </AnimationWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 transition-colors hover:border-slate-300 h-full group">
                  <div className={`w-14 h-14 rounded-xl ${highlight.bg} ${highlight.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{highlight.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {highlight.description}
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
