"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { ArrowRight, MessageSquare, Zap, Shield } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="pt-20 md:pt-32 pb-16 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <Badge variant="secondary" className="px-3 py-1 bg-primary/10 text-primary border-primary/20">
            ✨ Introducing EasyMsgSender 2.0
          </Badge>
        </AnimationWrapper>
        
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
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-w-5xl mx-auto rounded-2xl border bg-card shadow-2xl overflow-hidden flex items-center justify-center">
            {/* Mock Dashboard UI Preview */}
            <div className="absolute inset-0 bg-gradient-to-br from-card to-muted flex flex-col">
              <div className="h-12 border-b flex items-center px-4 gap-2 bg-background/50 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full max-w-4xl">
                  <div className="col-span-2 bg-background rounded-xl border shadow-sm p-6 flex flex-col gap-4">
                    <div className="h-8 w-1/3 bg-muted rounded-md animate-pulse" />
                    <div className="flex-1 bg-muted/50 rounded-md" />
                  </div>
                  <div className="bg-background rounded-xl border shadow-sm p-6 flex flex-col gap-4">
                    <div className="h-8 w-1/2 bg-muted rounded-md animate-pulse" />
                    <div className="h-20 bg-primary/10 rounded-md" />
                    <div className="h-20 bg-secondary/10 rounded-md" />
                    <div className="h-20 bg-primary/10 rounded-md" />
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
