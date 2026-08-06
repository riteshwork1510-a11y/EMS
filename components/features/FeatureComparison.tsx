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
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-6 font-semibold text-sm text-slate-900 border-b border-slate-100 w-1/3">Feature</th>
                    <th className="p-6 font-bold text-sm text-primary border-b border-slate-100 w-1/4">
                      EasyMsgSender
                    </th>
                    <th className="p-6 font-semibold text-sm text-slate-500 border-b border-slate-100 w-1/4">
                      Traditional WhatsApp
                    </th>
                    <th className="p-6 font-semibold text-sm text-slate-500 border-b border-slate-100 w-1/4">
                      Manual Messaging
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="group">
                      <td className="p-6 border-b border-slate-50 text-slate-700 text-sm font-medium transition-colors">
                        {feature.name}
                      </td>
                      
                      {/* EMS Column */}
                      <td className="p-6 border-b border-slate-50">
                        <div className="flex items-center justify-center">
                          {typeof feature.ems === 'boolean' ? (
                            feature.ems ? (
                              <div className="flex items-center justify-center text-primary">
                                <Check className="w-5 h-5" />
                              </div>
                            ) : (
                              <X className="w-5 h-5 text-slate-300" />
                            )
                          ) : (
                            <span className="font-bold text-primary text-xs uppercase tracking-wider">{feature.ems}</span>
                          )}
                        </div>
                      </td>

                      {/* Traditional Column */}
                      <td className="p-6 border-b border-slate-50">
                        <div className="flex items-center justify-center text-slate-500">
                          {typeof feature.traditional === 'boolean' ? (
                            feature.traditional ? <Check className="w-5 h-5" /> : <X className="w-5 h-5 text-slate-200" />
                          ) : (
                            <span className="text-sm">{feature.traditional}</span>
                          )}
                        </div>
                      </td>

                      {/* Manual Column */}
                      <td className="p-6 border-b border-slate-50">
                        <div className="flex items-center justify-center text-slate-500">
                          {typeof feature.manual === 'boolean' ? (
                            feature.manual ? <Check className="w-5 h-5" /> : <X className="w-5 h-5 text-slate-200" />
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
