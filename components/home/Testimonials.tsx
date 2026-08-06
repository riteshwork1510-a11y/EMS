"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

const testimonials = [
  {
    quote: "EasyMsgSender completely transformed how we communicate with our customers. The automation flows are incredibly intuitive.",
    author: "Sarah Jenkins",
    role: "VP of Marketing, TechGrowth",
    avatar: "S"
  },
  {
    quote: "We've seen a 40% increase in open rates since switching. The delivery speeds and reliability are unmatched in the industry.",
    author: "Michael Chang",
    role: "Founding Engineer, StartupX",
    avatar: "M"
  },
  {
    quote: "The best enterprise messaging tool I've used. It just works, and the support team is phenomenal.",
    author: "Elena Rodriguez",
    role: "Head of Growth, ScaleApp",
    avatar: "E"
  }
];

export function Testimonials() {
  return (
    <Section className="bg-primary text-primary-foreground py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Loved by forward-thinking teams
          </h2>
        </AnimationWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
            <div className="bg-primary-foreground/10 p-8 rounded-2xl flex flex-col h-full gap-6 backdrop-blur-sm border border-primary-foreground/20">
              <p className="text-lg leading-relaxed flex-1">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground text-primary flex items-center justify-center font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-primary-foreground/80">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        ))}
      </div>
    </Section>
  );
}
