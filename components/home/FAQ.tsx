"use client";

import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

const faqs = [
  {
    question: "Do I need technical skills to use EasyMsgSender?",
    answer: "Not at all. Our intuitive visual builder allows anyone to create complex automation workflows without writing a single line of code."
  },
  {
    question: "Can I integrate EasyMsgSender with my existing CRM?",
    answer: "Yes! We offer native integrations with Salesforce, HubSpot, Zoho, and many more. We also have a robust API for custom integrations."
  },
  {
    question: "How does the pricing work?",
    answer: "Our pricing is based on the number of messages you send per month and the features you need. All plans come with unlimited contacts."
  },
  {
    question: "Is my customer data secure?",
    answer: "Security is our top priority. We are SOC2 compliant, use bank-level encryption, and never sell or share your data with third parties."
  }
];

export function FAQ() {
  return (
    <Section className="py-24 bg-white">
      <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <AnimationWrapper animation="slideUp">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </AnimationWrapper>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50 hover:shadow-sm transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          </AnimationWrapper>
        ))}
      </div>
    </Section>
  );
}
