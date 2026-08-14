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
  }
];

export function FAQ() {
  return (
    <Section className="pb-20 overflow-hidden relative bg-white w-full pt-10">
      <div className="container px-4 md:px-8 mx-auto max-w-[1400px]">
        <div className="bg-[#f8f9fa] border border-slate-100 rounded-[2.5rem] p-8 md:p-12 lg:p-20 shadow-sm w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-between">
            
            {/* Left Content */}
            <div className="flex flex-col items-start w-full lg:w-1/3">
              <AnimationWrapper animation="slideUp" delay={0.2}>
                <h2 className="text-3xl md:text-4xl lg:text-[44px] font-medium tracking-tight text-slate-900 leading-[1.1]">
                  Frequently<br />
                  <span className="text-slate-400">Asked Questions</span>
                </h2>
              </AnimationWrapper>
              <AnimationWrapper animation="slideUp" delay={0.3}>
                <p className="text-sm md:text-base text-slate-500 max-w-sm leading-relaxed mt-6">
                  Have questions? We're here to help. If you can't find what you're looking for, feel free to reach out to our dedicated support team 24/7.
                </p>
              </AnimationWrapper>
            </div>

            {/* Right FAQ List */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              {faqs.map((faq, index) => (
                <AnimationWrapper key={index} animation="slideUp" delay={0.3 + index * 0.1}>
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10 hover:border-slate-300 transition-colors">
                    <h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">{faq.question}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{faq.answer}</p>
                  </div>
                </AnimationWrapper>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
}
