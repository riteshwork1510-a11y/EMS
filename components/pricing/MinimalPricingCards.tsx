"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { WABA_PLANS } from "@/mock/whatsapp-pricing/plans";
import { cn } from "@/lib/utils";

export function MinimalPricingCards() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center z-10 mt-12 mb-20">
      
      {/* Billing Toggle */}
      <div className="flex items-center p-1 bg-slate-100 rounded-full mb-16 border border-slate-200">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
            billingCycle === "monthly" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"
          )}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("annually")}
          className={cn(
            "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2",
            billingCycle === "annually" ? "bg-white shadow-sm text-slate-900" : "text-slate-500 hover:text-slate-900"
          )}
        >
          Annually
          <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Save 20%</span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
        {WABA_PLANS.map((plan) => {
          const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
          
          return (
            <div 
              key={plan.id}
              className={cn(
                "relative flex flex-col bg-white rounded-3xl p-8 border transition-all duration-300",
                plan.recommended 
                  ? "border-primary shadow-sm" 
                  : "border-slate-200 hover:border-slate-300"
              )}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 min-h-[40px] leading-relaxed">
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-black text-slate-900 tracking-tight">₹{price.toLocaleString('en-IN')}</span>
                  <span className="text-slate-500 font-medium mb-1">/mo</span>
                </div>
                {billingCycle === "annually" && (
                  <p className="text-xs text-slate-400">Billed ₹{(price * 12).toLocaleString('en-IN')} yearly</p>
                )}
                {billingCycle === "monthly" && (
                  <p className="text-xs text-slate-400">Billed monthly</p>
                )}
              </div>
              
              <button className={cn(
                "w-full py-3.5 rounded-xl text-sm font-bold transition-all mb-8",
                plan.recommended 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100"
              )}>
                Get Started
              </button>
              
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Includes</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>{plan.baseConversations.toLocaleString('en-IN')}</strong> Conversations</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>{plan.baseNumbers}</strong> WhatsApp Number{plan.baseNumbers > 1 ? 's' : ''}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 border-b border-slate-100 pb-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>{plan.baseTeamMembers}</strong> Team Member{plan.baseTeamMembers > 1 ? 's' : ''}</span>
                  </li>
                  
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
