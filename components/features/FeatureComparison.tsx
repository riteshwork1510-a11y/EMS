"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  { name: "Bulk Messaging", ems: true, traditional: false, manual: false },
  { name: "Smart Automation & Workflows", ems: true, traditional: false, manual: false },
  { name: "Advanced Analytics & Reporting", ems: true, traditional: false, manual: false },
  { name: "Dynamic Message Templates", ems: true, traditional: false, manual: false },
  { name: "Broadcast Scheduling", ems: true, traditional: false, manual: false },
  { name: "Rich Media Support", ems: true, traditional: true, manual: true },
  { name: "Team Inbox Collaboration", ems: true, traditional: true, manual: false },
  { name: "Performance Speed", ems: "Lightning Fast", traditional: "Slow", manual: "Very Slow" },
];

export function FeatureComparison() {
  return (
    <Section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <AnimationWrapper animation="slideUp">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Why Choose EasyMsgSender?
            </h2>
          </AnimationWrapper>
          <AnimationWrapper animation="slideUp" delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we stack up against traditional methods. Our platform is built for speed, scale, and high conversion rates.
            </p>
          </AnimationWrapper>
        </div>

        <AnimationWrapper animation="scale" delay={0.2}>
          <div className="bg-card border rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="p-6 font-semibold text-lg border-b w-1/3">Feature</th>
                    <th className="p-6 font-bold text-lg text-primary border-b bg-primary/5 w-1/4">
                      EasyMsgSender
                    </th>
                    <th className="p-6 font-semibold text-lg text-muted-foreground border-b w-1/4">
                      Traditional WhatsApp
                    </th>
                    <th className="p-6 font-semibold text-lg text-muted-foreground border-b w-1/4">
                      Manual Messaging
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="hover:bg-muted/20 transition-colors group">
                      <td className="p-6 border-b text-foreground font-medium group-hover:text-primary transition-colors">
                        {feature.name}
                      </td>
                      
                      {/* EMS Column */}
                      <td className="p-6 border-b bg-primary/5">
                        <div className="flex items-center justify-center">
                          {typeof feature.ems === 'boolean' ? (
                            feature.ems ? (
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shadow-sm">
                                <Check className="w-5 h-5" />
                              </div>
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground" />
                            )
                          ) : (
                            <span className="font-bold text-primary text-sm uppercase tracking-wider">{feature.ems}</span>
                          )}
                        </div>
                      </td>

                      {/* Traditional Column */}
                      <td className="p-6 border-b">
                        <div className="flex items-center justify-center text-muted-foreground">
                          {typeof feature.traditional === 'boolean' ? (
                            feature.traditional ? <Check className="w-5 h-5" /> : <X className="w-5 h-5 opacity-40" />
                          ) : (
                            <span className="text-sm">{feature.traditional}</span>
                          )}
                        </div>
                      </td>

                      {/* Manual Column */}
                      <td className="p-6 border-b">
                        <div className="flex items-center justify-center text-muted-foreground">
                          {typeof feature.manual === 'boolean' ? (
                            feature.manual ? <Check className="w-5 h-5" /> : <X className="w-5 h-5 opacity-40" />
                          ) : (
                            <span className="text-sm">{feature.manual}</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </Section>
  );
}
