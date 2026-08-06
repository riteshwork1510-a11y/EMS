"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { Button } from "@/components/ui/button";

export function InteractivePreview() {
  return (
    <Section className="py-24">
      <div className="flex flex-col items-center text-center space-y-4 mb-12 max-w-3xl mx-auto">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Built for speed and scale
          </h2>
        </AnimationWrapper>
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <p className="text-lg text-muted-foreground">
            Experience the most intuitive campaign builder in the industry. Draft, segment, and deploy in minutes, not hours.
          </p>
        </AnimationWrapper>
      </div>

      <AnimationWrapper animation="scale" delay={0.2}>
        <div className="w-full max-w-5xl mx-auto rounded-2xl border bg-background shadow-xl overflow-hidden">
          <div className="flex border-b bg-muted/30">
            <div className="px-6 py-3 border-r font-medium text-sm bg-background border-b-2 border-b-primary -mb-[1px]">
              Campaign Builder
            </div>
            <div className="px-6 py-3 border-r font-medium text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              Audience Setup
            </div>
            <div className="px-6 py-3 font-medium text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              Analytics
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-10 w-full bg-muted/50 rounded border" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-muted rounded" />
                <div className="h-32 w-full bg-muted/50 rounded border" />
              </div>
              <Button>Save Draft</Button>
            </div>
            <div className="w-full md:w-80 bg-muted/20 rounded-xl border p-6 flex flex-col items-center justify-center min-h-[300px]">
              {/* Mobile device mockup */}
              <div className="w-[200px] h-[400px] border-[6px] border-foreground/10 rounded-[2rem] bg-background relative overflow-hidden shadow-sm">
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                  <div className="w-20 h-4 bg-foreground/10 rounded-b-xl" />
                </div>
                <div className="p-4 mt-8 space-y-3">
                  <div className="w-3/4 h-10 bg-primary/20 rounded-xl rounded-tl-sm ml-auto" />
                  <div className="w-full h-16 bg-muted rounded-xl rounded-tr-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </Section>
  );
}
