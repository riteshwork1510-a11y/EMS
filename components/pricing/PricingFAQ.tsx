"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PRICING_FAQ } from "@/mock/whatsapp-pricing/faq";
import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { cn } from "@/lib/utils";

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-6 w-full">
        
        <div className="text-center mb-16">
          <AnimationWrapper animation="slideUp">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Everything you need to know about Meta's WhatsApp API pricing.
            </p>
          </AnimationWrapper>
        </div>

        <div className="space-y-4">
          {PRICING_FAQ.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <AnimationWrapper key={index} animation="slideUp" delay={0.1 * index}>
                <div 
                  className={cn(
                    "bg-white transition-all duration-300 overflow-hidden border-b",
                    isOpen ? "border-primary" : "border-slate-200"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-semibold text-slate-900 text-lg pr-8">{faq.question}</span>
                    <div className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen ? "text-primary rotate-180" : "text-slate-400"
                    )}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="pb-6 pt-1">
                          <p className="text-slate-500 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimationWrapper>
            );
          })}
        </div>

      </div>
    </Section>
  );
}
