"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { Check, Clock, MessageCircle, Tag, ShoppingCart } from "lucide-react";

export function Benefits() {
  return (
    <Section className="pb-24 overflow-hidden relative bg-white w-full pt-16">
      <div className="container px-6 md:px-12 mx-auto max-w-[1600px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-between w-full">
          
          {/* Left Content */}
          <div className="flex flex-col items-start w-full lg:w-1/2">
            <AnimationWrapper animation="slideUp" delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-slate-900 leading-[1.1]">
                Work smarter, not harder.<br />
                <span className="text-slate-400">Let automation do the heavy lifting.</span>
              </h2>
            </AnimationWrapper>
            
            <AnimationWrapper animation="slideUp" delay={0.3}>
              <p className="text-base text-slate-500 max-w-lg leading-relaxed mt-8">
                EasyMsgSender is designed to streamline your workflow. Set up your campaigns once and let our intelligent routing and automation engine handle the rest.
              </p>
            </AnimationWrapper>

            <AnimationWrapper animation="slideUp" delay={0.4} className="mt-12 w-full">
              <div className="flex flex-col gap-6">
                {[
                  "Increase conversion rates by up to 35%",
                  "Automate repetitive follow-ups and save 10+ hours a week",
                  "Unify all customer communication in one inbox",
                  "Detailed A/B testing for message optimization",
                  "Seamless integration with your existing CRM"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-slate-700" />
                    </div>
                    <span className="text-base font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimationWrapper>
          </div>

          {/* Right Widget - Workflow */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <AnimationWrapper animation="scale" delay={0.5}>
              <div className="relative w-full max-w-[480px] bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10">
                
                {/* Decorative background element */}
                <div className="absolute -z-10 top-8 -right-8 md:top-12 md:-right-12 w-full h-full bg-slate-50 rounded-[2.5rem]"></div>
                
                <div className="flex items-start gap-5 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-orange-500">
                    <ShoppingCart className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col pt-1.5">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Abandoned Cart Recovery</h3>
                    <p className="text-sm text-slate-400 mt-1.5">Triggered when a user leaves checkout</p>
                  </div>
                </div>

                <div className="flex flex-col gap-0 relative ml-3">
                  {/* Connecting Line */}
                  <div className="absolute left-6 top-10 bottom-10 w-[2px] bg-slate-100 -z-0"></div>

                  {/* Step 1 */}
                  <div className="flex items-start gap-6 group relative z-10 mb-10 bg-white">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-slate-500 bg-white group-hover:border-slate-300 transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col flex-1 pt-2 bg-white">
                      <span className="font-semibold text-slate-900 text-base">Wait 30 minutes</span>
                      <span className="text-sm text-slate-400 mt-1">Delay before first message</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-6 group relative z-10 mb-10 bg-white">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-slate-500 bg-white group-hover:border-slate-300 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col flex-1 pt-2 bg-white">
                      <span className="font-semibold text-slate-900 text-base">Send WhatsApp Message</span>
                      <span className="text-sm text-slate-500 italic mt-3 bg-slate-50 p-3 rounded-xl inline-block w-max border border-slate-100">"Hey! You left something behind..."</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-6 group relative z-10 bg-white">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 text-slate-500 bg-white group-hover:border-slate-300 transition-colors">
                      <Tag className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col flex-1 pt-2 bg-white">
                      <span className="font-semibold text-slate-900 text-base">Update CRM Tag</span>
                      <span className="text-sm text-slate-400 mt-1">If purchased, tag as VIP</span>
                    </div>
                  </div>

                </div>
              </div>
            </AnimationWrapper>
          </div>

        </div>
      </div>
    </Section>
  );
}
