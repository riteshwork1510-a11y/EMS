"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { CheckCircle2, ShoppingCart, Clock, MessageCircle, Tag } from "lucide-react";
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
    <Section className="bg-white">
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

        <AnimationWrapper animation="slideRight" className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex items-center justify-center p-8">
           <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col gap-4">
             {/* Mock workflow UI */}
             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
               <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                 <ShoppingCart className="w-5 h-5 text-slate-700" />
               </div>
               <div>
                 <h4 className="font-semibold text-slate-800 text-sm">Abandoned Cart Recovery</h4>
                 <p className="text-xs text-slate-500">Triggered when a user leaves checkout</p>
               </div>
             </div>
             
             <div className="flex-1 flex flex-col relative pt-2">
               <div className="absolute left-[15px] top-6 bottom-6 w-[2px] bg-slate-100 -z-10" />
               
               <div className="flex items-start gap-4 mb-4">
                 <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center z-10 shrink-0 mt-1">
                   <Clock className="w-3.5 h-3.5 text-slate-400" />
                 </div>
                 <div className="flex-1 bg-white border border-slate-200 shadow-sm rounded-xl p-3">
                   <p className="text-sm font-semibold text-slate-800">Wait 30 minutes</p>
                   <p className="text-xs text-slate-500 mt-0.5">Delay before first message</p>
                 </div>
               </div>

               <div className="flex items-start gap-4 mb-4">
                 <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-900 shadow-sm flex items-center justify-center z-10 shrink-0 mt-1">
                   <MessageCircle className="w-3.5 h-3.5 text-slate-900" />
                 </div>
                 <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-3">
                   <p className="text-sm font-semibold text-slate-800">Send WhatsApp Message</p>
                   <p className="text-xs text-slate-600 mt-0.5 font-medium">"Hey! You left something behind..."</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center z-10 shrink-0 mt-1">
                   <Tag className="w-3.5 h-3.5 text-slate-400" />
                 </div>
                 <div className="flex-1 bg-white border border-slate-200 shadow-sm rounded-xl p-3">
                   <p className="text-sm font-semibold text-slate-800">Update CRM Tag</p>
                   <p className="text-xs text-slate-500 mt-0.5">If purchased, tag as VIP</p>
                 </div>
               </div>

             </div>
           </div>
        </AnimationWrapper>
      </div>
    </Section>
  );
}
