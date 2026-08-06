"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Increase conversion rates by up to 35%",
  "Automate repetitive follow-ups and save 10+ hours a week",
  "Unify all customer communication in one inbox",
  "Detailed A/B testing for message optimization",
  "Seamless integration with your existing CRM",
];

export function Benefits() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <AnimationWrapper animation="slideLeft" className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Work smarter, not harder. Let automation do the heavy lifting.
          </h2>
          <p className="text-lg text-muted-foreground">
            EasyMsgSender is designed to streamline your workflow. Set up your campaigns once and let our intelligent routing and automation engine handle the rest.
          </p>
          <ul className="flex flex-col gap-4 mt-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </AnimationWrapper>

        <AnimationWrapper animation="slideRight" className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-muted rounded-3xl overflow-hidden border shadow-xl flex items-center justify-center p-8">
           <div className="w-full h-full bg-background rounded-2xl shadow-sm border p-6 flex flex-col gap-4">
             {/* Mock workflow UI */}
             <div className="flex items-center gap-3 border-b pb-4">
               <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                 <CheckCircle2 className="w-5 h-5 text-primary" />
               </div>
               <div>
                 <div className="h-4 w-32 bg-muted rounded mb-2" />
                 <div className="h-3 w-24 bg-muted/50 rounded" />
               </div>
             </div>
             <div className="flex-1 flex flex-col gap-3 relative">
               <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border -z-10" />
               {[1,2,3].map((i) => (
                 <div key={i} className="flex items-center gap-4 ml-[7px]">
                   <div className="w-4 h-4 rounded-full bg-background border-2 border-primary z-10" />
                   <div className="flex-1 h-12 bg-muted/30 rounded-md border flex items-center px-4">
                     <div className="h-2 w-full max-w-[120px] bg-muted-foreground/20 rounded" />
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </AnimationWrapper>
      </div>
    </Section>
  );
}
