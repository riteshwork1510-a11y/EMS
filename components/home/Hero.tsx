"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { ArrowRight, MessageSquare, Zap, Shield } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="pt-20 md:pt-32 pb-16 overflow-hidden relative bg-transparent">

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

        
        <AnimationWrapper animation="slideUp" delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Connect with your audience at <span className="text-primary">scale</span>.
          </h1>
        </AnimationWrapper>
        
        <AnimationWrapper animation="slideUp" delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The premium marketing automation platform designed for modern enterprise teams. 
            Send, track, and optimize your messaging campaigns without the complexity.
          </p>
        </AnimationWrapper>
        
        <AnimationWrapper animation="slideUp" delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 group">
            Start Free Trial
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8">
            Book a Demo
          </Button>
        </AnimationWrapper>

        <AnimationWrapper animation="scale" delay={0.6} className="w-full mt-16">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden flex items-center justify-center">
            {/* Mock Dashboard UI Preview */}
            <div className="absolute inset-0 bg-slate-50 flex flex-col">
              <div className="h-12 border-b border-slate-200 flex items-center px-4 gap-2 bg-white">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex p-8 gap-6 w-full h-full max-w-6xl mx-auto text-left">
                {/* Main Content Area */}
                <div className="flex-[2] flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-800 text-lg">Recent Campaigns</h3>
                    <Button variant="outline" size="sm" className="h-8">View All</Button>
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
                    {[
                      { name: "Black Friday Promo", type: "WhatsApp", sent: "45.2k", status: "Active", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
                      { name: "Welcome Flow - New Users", type: "Email", sent: "12.8k", status: "Active", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
                      { name: "Q3 Product Update", type: "SMS", sent: "89.4k", status: "Completed", color: "text-slate-600 bg-slate-50 border-slate-200" }
                    ].map((campaign, i) => (
                      <div key={i} className="flex items-center justify-between p-5 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-slate-800 text-sm">{campaign.name}</span>
                          <span className="text-xs text-slate-500">{campaign.type} • {campaign.sent} sent</span>
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${campaign.color}`}>
                          {campaign.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sidebar Stats Area */}
                <div className="flex-[1] hidden md:flex flex-col gap-6">
                  <h3 className="font-semibold text-slate-800 text-lg">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-center">
                      <span className="text-xs text-slate-500 font-medium mb-1">Total Sent</span>
                      <span className="text-xl font-bold text-slate-800">147.4k</span>
                      <span className="text-[10px] text-emerald-600 font-bold mt-1">↑ 12%</span>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-center">
                      <span className="text-xs text-slate-500 font-medium mb-1">Avg Open</span>
                      <span className="text-xl font-bold text-slate-800">64.2%</span>
                      <span className="text-[10px] text-emerald-600 font-bold mt-1">↑ 2.4%</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-slate-800 text-sm">Automate your growth</span>
                    <span className="text-xs text-slate-600 mt-1 mb-4">Set up triggers for your audience.</span>
                    <Button size="sm" className="w-full bg-slate-900 hover:bg-slate-800 text-white h-8 text-xs">Create Workflow</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </Section>
  );
}
