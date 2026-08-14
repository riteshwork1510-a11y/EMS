"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ShoppingCart,
  ShieldCheck,
  Clock,
  Battery,
  Wifi,
  SignalHigh,
  Video,
  Phone,
  ChevronLeft
} from "lucide-react";
import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";

type TemplateType = "marketing" | "utility" | "authentication" | "service";

interface Template {
  id: TemplateType;
  label: string;
  icon: any;
  title: string;
  description: string;
  messageType: "received" | "sent";
  messageText: React.ReactNode;
  time: string;
}

const TEMPLATES: Template[] = [
  {
    id: "marketing",
    label: "Marketing Promo",
    icon: ShoppingCart,
    title: "Drive More Sales",
    description: "Send personalized offers and rich media to your audience.",
    messageType: "received",
    messageText: (
      <>
        <div className="font-bold mb-1">🎉 Flash Sale: 50% OFF!</div>
        <div className="mb-2">Hi there! Our biggest sale of the year is live right now. Grab your favorite styles before they sell out.</div>
        <div className="w-full h-32 bg-slate-100 rounded-lg mb-2 relative overflow-hidden flex items-center justify-center">
          <span className="text-4xl text-slate-300">🛍️</span>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-white border border-slate-200 text-blue-500 font-semibold py-1.5 rounded-lg text-sm">Shop Now</button>
          <button className="flex-1 bg-white border border-slate-200 text-blue-500 font-semibold py-1.5 rounded-lg text-sm">Opt out</button>
        </div>
      </>
    ),
    time: "10:42 AM"
  },
  {
    id: "utility",
    label: "Utility Alert",
    icon: Clock,
    title: "Keep Customers Updated",
    description: "Send order confirmations, shipping updates, and reminders.",
    messageType: "received",
    messageText: (
      <>
        <div className="font-bold mb-1">📦 Order Shipped</div>
        <div className="mb-2">Hi Sarah, your order #ORD-9842 has been shipped and will arrive on Friday, 12th Aug.</div>
        <button className="w-full bg-white border border-slate-200 text-blue-500 font-semibold py-1.5 rounded-lg text-sm">Track Package</button>
      </>
    ),
    time: "2:15 PM"
  },
  {
    id: "authentication",
    label: "Authentication (OTP)",
    icon: ShieldCheck,
    title: "Secure Verification",
    description: "Deliver highly reliable OTPs and login codes globally.",
    messageType: "received",
    messageText: (
      <>
        <div className="mb-2">Your OptiMatrix verification code is:</div>
        <div className="text-2xl font-bold tracking-widest text-center py-2 bg-slate-50 rounded-lg mb-2">492 011</div>
        <div className="text-xs text-slate-500">Do not share this code with anyone. It expires in 10 minutes.</div>
        <button className="w-full mt-2 bg-white border border-slate-200 text-blue-500 font-semibold py-1.5 rounded-lg text-sm">Copy Code</button>
      </>
    ),
    time: "Just now"
  },
  {
    id: "service",
    label: "Customer Service",
    icon: MessageCircle,
    title: "Resolve Issues Faster",
    description: "Provide 24/7 support using AI chatbots or human agents.",
    messageType: "received",
    messageText: (
      <>
        <div className="mb-2">Hi! I'm the OptiMatrix Support Bot 🤖. How can I help you today?</div>
        <div className="flex flex-col gap-1.5">
          <button className="w-full bg-white border border-slate-200 text-blue-500 font-semibold py-1.5 rounded-full text-sm text-left px-4">1. Billing Issue</button>
          <button className="w-full bg-white border border-slate-200 text-blue-500 font-semibold py-1.5 rounded-full text-sm text-left px-4">2. Technical Support</button>
          <button className="w-full bg-white border border-slate-200 text-blue-500 font-semibold py-1.5 rounded-full text-sm text-left px-4">3. Talk to Agent</button>
        </div>
      </>
    ),
    time: "9:00 AM"
  }
];

export function WhatsAppSimulator() {
  const [activeTemplateId, setActiveTemplateId] = useState<TemplateType>("marketing");

  const activeTemplate = TEMPLATES.find(t => t.id === activeTemplateId) || TEMPLATES[0];

  return (
    <Section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 lg:p-16 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left Side: Controls */}
            <div className="flex flex-col">
              <AnimationWrapper animation="slideUp">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-slate-500 bg-slate-100 mb-6">
                  Interactive Preview
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                  See it in action
                </h2>
                <p className="text-sm text-slate-500 mb-10 max-w-lg">
                  Experience exactly how your messages will look on your customers' phones. Choose a template below to preview.
                </p>
              </AnimationWrapper>

              <AnimationWrapper animation="slideUp" delay={0.2} className="space-y-3">
                {TEMPLATES.map((template) => {
                  const Icon = template.icon;
                  const isActive = activeTemplateId === template.id;

                  return (
                    <button
                      key={template.id}
                      onClick={() => setActiveTemplateId(template.id)}
                      className={cn(
                        "w-full flex items-start gap-4 p-5 rounded-2xl border-2 transition-all duration-300 text-left",
                        isActive
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                        isActive ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                      )}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={cn(
                          "font-bold text-base mb-1",
                          isActive ? "text-primary" : "text-slate-900"
                        )}>{template.label}</h3>
                        <p className="text-xs text-slate-500">{template.description}</p>
                      </div>
                    </button>
                  );
                })}
              </AnimationWrapper>
            </div>

            {/* Right Side: Phone Mockup */}
            <AnimationWrapper animation="scale" delay={0.3} className="flex justify-center lg:justify-end perspective-1000">

              {/* Minimal Phone Frame */}
              <div className="relative w-[360px] h-[700px] bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col">

                {/* Screen */}
                <div className="w-full h-full relative flex flex-col bg-slate-50/50">

                  {/* Status Bar */}
                  <div className="h-10 w-full flex items-center justify-between px-6 pt-2 z-10 text-slate-800 font-semibold text-[11px]">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <SignalHigh className="w-3.5 h-3.5" />
                      <Wifi className="w-3.5 h-3.5" />
                      <Battery className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Minimal Header */}
                  <div className="bg-white border-b border-slate-100 flex items-center gap-3 px-4 py-3 z-10">
                    <div className="flex items-center gap-1 cursor-pointer">
                      <ChevronLeft className="w-5 h-5 text-slate-400" />
                      <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden relative border border-slate-200 flex items-center justify-center">
                        <Image
                          src="/logo.png"
                          alt="Brand"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    </div>
                    <div className="flex-1 cursor-pointer">
                      <h4 className="font-semibold text-[14px] text-slate-900 leading-tight">OptiMatrix Solutions</h4>
                      <p className="text-[11px] text-slate-400">Opti Matrix</p>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 px-1">
                      <Video className="w-4 h-4" />
                      <Phone className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 p-4 flex flex-col overflow-hidden relative z-10">
                    <div className="flex justify-center mb-4">
                      <span className="bg-white border border-slate-100 text-slate-500 text-xs px-3 py-1 rounded-full shadow-sm">
                        Today
                      </span>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTemplate.id}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={cn(
                          "max-w-[85%] rounded-2xl p-3 relative border",
                          activeTemplate.messageType === "received"
                            ? "bg-white border-slate-100 self-start rounded-tl-sm shadow-sm"
                            : "bg-slate-50 border-slate-200 self-end rounded-tr-sm"
                        )}
                      >
                        <div className="text-[14px] text-slate-800 leading-snug">
                          {activeTemplate.messageText}
                        </div>

                        <div className="text-[10px] text-slate-400 text-right mt-1 font-medium flex justify-end items-center gap-1">
                          {activeTemplate.time}
                          {activeTemplate.messageType === "sent" && (
                            <span className="text-blue-500">✓✓</span>
                          )}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Message Input Area */}
                  <div className="bg-transparent p-2 z-10">
                    <div className="bg-white rounded-full flex items-center px-4 py-2.5 shadow-sm">
                      <div className="text-slate-400 w-6 h-6 mr-2">🙂</div>
                      <div className="flex-1 text-slate-400 text-[15px]">Message</div>
                      <div className="text-slate-400 w-6 h-6 ml-2">📎</div>
                      <div className="text-slate-400 w-6 h-6 ml-2">📷</div>
                    </div>
                  </div>

                </div>
              </div>

            </AnimationWrapper>

          </div>
        </div>
      </div>
    </Section>
  );
}
