import { WhatsAppPlan } from "@/types/whatsapp-pricing";

export const WABA_PLANS: WhatsAppPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses getting started with WhatsApp API.",
    monthlyPrice: 1999,
    annualPrice: 1599, // Per month billed annually
    baseConversations: 500,
    baseNumbers: 1,
    baseTeamMembers: 1,
    baseBroadcastLimit: "5,000",
    features: [
      "Official Meta WhatsApp API",
      "Shared Team Inbox",
      "Basic Chatbot Builder",
      "Email Support",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "Ideal for growing teams needing automation and analytics.",
    monthlyPrice: 4999,
    annualPrice: 3999,
    recommended: true,
    baseConversations: 5000,
    baseNumbers: 2,
    baseTeamMembers: 5,
    baseBroadcastLimit: "50,000",
    features: [
      "Everything in Starter",
      "Advanced Automation Workflows",
      "Campaign Analytics",
      "Priority Chat Support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "For established businesses with high message volume and AI needs.",
    monthlyPrice: 9999,
    annualPrice: 7999,
    baseConversations: 50000,
    baseNumbers: 5,
    baseTeamMembers: 10,
    baseBroadcastLimit: "Unlimited",
    features: [
      "Everything in Business",
      "AI-Powered Chatbot",
      "REST API & Webhooks",
      "Dedicated Success Manager",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for large-scale operations with dedicated support.",
    monthlyPrice: 24999,
    annualPrice: 19999,
    baseConversations: 100000,
    baseNumbers: 10,
    baseTeamMembers: 999, // represents unlimited in logic
    baseBroadcastLimit: "Unlimited",
    features: [
      "Everything in Professional",
      "Enterprise AI Models",
      "Custom SLA & Integrations",
      "24/7 Phone Support",
    ],
  },
];
