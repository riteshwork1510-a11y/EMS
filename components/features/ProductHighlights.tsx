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
    <Section className="bg-muted/10 py-24 relative overflow-hidden">
      
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-16">
          <AnimationWrapper animation="slideUp">
             <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Platform Highlights</span>
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 max-w-2xl">
               Everything you need to grow your audience.
             </h2>
          </AnimationWrapper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all h-full group"
                >
                  <div className={`w-14 h-14 rounded-xl ${highlight.bg} ${highlight.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              </AnimationWrapper>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
