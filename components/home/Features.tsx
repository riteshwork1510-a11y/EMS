"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { MessageSquare, Zap, Shield, BarChart3, Users, Globe } from "lucide-react";

const features = [
  {
    title: "Omnichannel Messaging",
    description: "Reach your customers wherever they are. SMS, WhatsApp, Email, and Push notifications from a single interface.",
    icon: MessageSquare,
  },
  {
    title: "Lightning Fast Delivery",
    description: "Our global infrastructure ensures your messages are delivered instantly, with 99.99% uptime guaranteed.",
    icon: Zap,
  },
  {
    title: "Enterprise Grade Security",
    description: "Bank-level encryption and SOC2 compliance out of the box to keep your customer data secure.",
    icon: Shield,
  },
  {
    title: "Advanced Analytics",
    description: "Track open rates, click-throughs, and conversions in real-time with our beautiful analytics dashboard.",
    icon: BarChart3,
  },
  {
    title: "Audience Segmentation",
    description: "Group your users based on behavior, location, or custom attributes for highly targeted campaigns.",
    icon: Users,
  },
  {
    title: "Global Reach",
    description: "Connect with audiences in over 190 countries with built-in localization and compliance tools.",
    icon: Globe,
  },
];

export function Features() {
  return (
    <Section className="pb-24 overflow-hidden relative bg-white w-full pt-16">
      <div className="container px-6 md:px-12 mx-auto max-w-[1600px]">
        <div className="w-full">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-5 mb-20">
            <AnimationWrapper animation="slideUp">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
                Everything you need to grow
              </h2>
            </AnimationWrapper>
            <AnimationWrapper animation="slideUp" delay={0.1}>
              <p className="text-lg text-slate-500 max-w-2xl">
                Powerful features designed to help you build meaningful relationships with your audience at any scale.
              </p>
            </AnimationWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
                <div className="h-full bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] p-10 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:border-slate-200 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-base text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
