"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

const integrations = [
  "Salesforce", "HubSpot", "Zendesk", "Shopify", "Stripe", 
  "Slack", "Zapier", "Segment", "Mixpanel", "Intercom", 
  "Mailchimp", "Clearbit"
];

export function Integrations() {
  return (
    <Section className="py-24 bg-muted/30">
      <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Plays well with others
          </h2>
        </AnimationWrapper>
        <AnimationWrapper animation="slideUp" delay={0.1}>
          <p className="text-lg text-muted-foreground">
            Connect EasyMsgSender with the tools you already use to create seamless workflows across your entire stack.
          </p>
        </AnimationWrapper>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {integrations.map((integration, index) => (
          <AnimationWrapper 
            key={index} 
            animation="scale" 
            delay={index * 0.05}
          >
            <div className="px-6 py-3 bg-background border rounded-full shadow-sm text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default">
              {integration}
            </div>
          </AnimationWrapper>
        ))}
      </div>
    </Section>
  );
}
