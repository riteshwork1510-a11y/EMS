"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    <Section className="bg-slate-50 border-t border-slate-100">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-16">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Everything you need to grow
          </h2>
        </AnimationWrapper>
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to help you build meaningful relationships with your audience at any scale.
          </p>
        </AnimationWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
            <Card className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-slate-700" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimationWrapper>
        ))}
      </div>
    </Section>
  );
}
