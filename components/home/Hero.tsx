"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { ArrowRight, Smartphone, Inbox, Globe, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <Section className="pt-6 md:pt-10 pb-20 overflow-hidden relative bg-white w-full">
      <div className="container px-4 md:px-8 mx-auto max-w-[1400px]">
        <div className="bg-[#f8f9fa] border border-slate-100 rounded-[2.5rem] p-8 md:p-12 lg:p-20 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">

            {/* Left Content */}
            <div className="flex flex-col items-start w-full lg:w-1/2">
              <AnimationWrapper animation="slideUp" delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-slate-900 leading-[1.1]">
                  Connect with<br />
                  your audience<br />
                  <span className="text-slate-400">at scale.</span>
                </h1>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.3}>
                <p className="text-base text-slate-500 max-w-md leading-relaxed mt-6">
                  The premium platform designed for modern enterprise teams.
                  Send, track, and optimize your messaging campaigns without the complexity.
                </p>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.4} className="flex flex-row items-center gap-4 mt-8">
                <a 
                  href="https://wa.me/+918128361116?text=Hello%20EasyMsgSender%20team!%20I%20would%20like%20to%20book%20a%20quick%20demo%20to%20see%20how%20your%20WhatsApp%20API%20platform%20works."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap h-10 px-4 text-slate-600 hover:text-black hover:bg-slate-100 text-sm font-medium rounded-full transition-all group"
                >
                  Book a Demo
                  <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </AnimationWrapper>

              {/* Minimal Inline Stats */}
              <AnimationWrapper animation="slideUp" delay={0.5} className="mt-12 pt-8 border-t border-slate-100 w-full max-w-md">
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold text-slate-900">147.4k</span>
                    <span className="text-xs text-slate-500 mt-0.5">Total Sent <span className="text-emerald-500 ml-1">↑12%</span></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold text-slate-900">64.2%</span>
                    <span className="text-xs text-slate-500 mt-0.5">Avg Open <span className="text-emerald-500 ml-1">↑2.4%</span></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold text-slate-900">3+</span>
                    <span className="text-xs text-slate-500 mt-0.5">Active Channels</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-semibold text-slate-900">24/7</span>
                    <span className="text-xs text-slate-500 mt-0.5">Dedicated Support</span>
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            {/* Right Unique Card Widget */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
              <AnimationWrapper animation="scale" delay={0.6}>
                <div className="relative w-full max-w-[420px] bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">

                  {/* Decorative background element */}
                  <div className="absolute -z-10 top-6 -right-6 md:top-10 md:-right-10 w-full h-full bg-slate-200/60 rounded-3xl"></div>

                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Recent Campaigns</h3>
                    <Button variant="ghost" size="icon" className="w-6 h-6 text-slate-400 hover:text-black rounded-full">
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex flex-col gap-6">
                    {[
                      { name: "Black Friday Promo", desc: "WhatsApp • 45.2k sent", icon: Smartphone, status: "Active" },
                      { name: "Welcome Flow", desc: "Email • 12.8k sent", icon: Inbox, status: "Active" },
                      { name: "Q3 Update", desc: "SMS • 89.4k sent", icon: Globe, status: "Done" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center shrink-0 text-slate-500 group-hover:bg-slate-50 transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col flex-1">
                          <span className="font-medium text-slate-900 text-sm">{item.name}</span>
                          <span className="text-xs text-slate-400">{item.desc}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 h-10 text-xs font-semibold rounded-full transition-all">
                      Automate your growth — Create Workflow
                    </Button>
                  </div>
                </div>
              </AnimationWrapper>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}
