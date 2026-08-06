"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

const integrations = [
  { name: "WhatsApp Business", status: "Available", color: "bg-green-100 text-green-700" },
  { name: "Meta", status: "Available", color: "bg-blue-100 text-blue-700" },
  { name: "Google Sheets", status: "Available", color: "bg-emerald-100 text-emerald-700" },
  { name: "Zapier", status: "Available", color: "bg-orange-100 text-orange-700" },
  { name: "Webhook", status: "Available", color: "bg-slate-200 text-slate-700" },
  { name: "CSV Export", status: "Available", color: "bg-teal-100 text-teal-700" },
  { name: "REST API", status: "Coming Soon", color: "bg-purple-100 text-purple-700" },
  { name: "Salesforce", status: "Coming Soon", color: "bg-sky-100 text-sky-700" },
];

export function IntegrationLogos() {
  return (
    <Section className="py-24 bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Plays well with others
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            Connect EasyMsgSender with your favorite tools to automate your workflows and sync your data seamlessly.
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {integrations.map((integration, i) => (
            <AnimationWrapper key={i} animation="scale" delay={i * 0.05}>
              <div className="bg-card border rounded-2xl p-6 flex flex-col items-center justify-center gap-3 aspect-video shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                 <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="font-semibold text-foreground relative z-10">{integration.name}</span>
                 <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full relative z-10 ${integration.color}`}>
                   {integration.status}
                 </span>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </Section>
  );
}
