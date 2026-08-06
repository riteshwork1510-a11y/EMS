"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, MessageSquare, LineChart, Globe, Lock, Code } from "lucide-react";

const categories = [
  {
    title: "Messaging Channels",
    description: "Connect with your audience where they spend their time.",
    icon: MessageSquare,
    items: ["SMS & MMS", "WhatsApp Business", "Email Marketing", "Push Notifications"]
  },
  {
    title: "Automation & Workflows",
    description: "Build complex journeys without writing code.",
    icon: Zap,
    items: ["Visual Flow Builder", "A/B Testing", "Time-based triggers", "Event-based triggers"]
  },
  {
    title: "Analytics & Insights",
    description: "Measure the impact of your campaigns in real-time.",
    icon: LineChart,
    items: ["Delivery Tracking", "Conversion Funnels", "Custom Dashboards", "Exportable Reports"]
  },
  {
    title: "Global Infrastructure",
    description: "Reliable delivery to every corner of the globe.",
    icon: Globe,
    items: ["190+ Countries", "Local number provisioning", "Smart routing", "Compliance handling"]
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade protection for your data.",
    icon: Lock,
    items: ["SOC2 Type II", "GDPR Compliant", "End-to-end encryption", "Role-based access"]
  },
  {
    title: "Developer Experience",
    description: "Powerful APIs and SDKs for custom integrations.",
    icon: Code,
    items: ["REST API", "Webhooks", "Node.js SDK", "Python SDK"]
  }
];

export function FeatureCategories() {
  return (
    <Section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Deep dive into our capabilities
          </h2>
        </AnimationWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
            <Card className="h-full border-slate-200 shadow-sm transition-colors hover:border-slate-300">
              <CardHeader>
                <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center mb-4 text-primary">
                  <category.icon className="w-5 h-5" />
                </div>
                <CardTitle className="text-xl text-slate-900">{category.title}</CardTitle>
                <CardDescription className="text-slate-500">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600 before:content-[''] before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full before:mr-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimationWrapper>
        ))}
      </div>
    </Section>
  );
}
