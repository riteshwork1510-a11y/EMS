"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "₹3,999",
    description: "Perfect for small teams getting started with automation.",
    features: ["Up to 10,000 messages/mo", "Basic Analytics", "Email Support", "1 Team Member"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹11,999",
    description: "For growing companies that need more power and scale.",
    features: ["Up to 100,000 messages/mo", "Advanced Analytics", "Priority Support", "5 Team Members", "A/B Testing"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Dedicated infrastructure and support for large organizations.",
    features: ["Unlimited messages", "Custom SLA", "24/7 Phone Support", "Unlimited Team Members", "Dedicated Success Manager"],
    cta: "Contact Sales",
    popular: false,
  }
];

export function PricingPreview() {
  return (
    <Section id="pricing" className="bg-muted/30 py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Simple, transparent pricing
          </h2>
        </AnimationWrapper>
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No surprise charges. Choose the plan that best fits your needs.
          </p>
        </AnimationWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
            <Card className={`h-full flex flex-col relative ${tier.popular ? 'border-primary shadow-xl ring-1 ring-primary' : 'border shadow-md'}`}>
              {tier.popular && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                  {tier.price}
                  {tier.price !== "Custom" && <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>}
                </div>
                <CardDescription className="pt-4">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.popular ? "default" : "outline"} size="lg">
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          </AnimationWrapper>
        ))}
      </div>
    </Section>
  );
}
