import { CustomizationOption } from "@/types/whatsapp-pricing";

export const CUSTOMIZATION_OPTIONS: CustomizationOption[] = [
  {
    id: "conversations",
    title: "Monthly Conversations",
    description: "Includes both user-initiated and business-initiated conversations.",
    type: "slider",
    options: [
      { label: "500", value: 500, cost: 0 },
      { label: "1,000", value: 1000, cost: 499 },
      { label: "5,000", value: 5000, cost: 2499 },
      { label: "10,000", value: 10000, cost: 4999 },
      { label: "50,000", value: 50000, cost: 19999 },
      { label: "100,000+", value: 100000, cost: 34999 },
    ],
  },
  {
    id: "numbers",
    title: "WhatsApp Numbers",
    description: "Number of official WhatsApp Business API numbers connected.",
    type: "slider",
    options: [
      { label: "1", value: 1, cost: 0 },
      { label: "2", value: 2, cost: 999 },
      { label: "5", value: 5, cost: 3999 },
      { label: "10", value: 10, cost: 7999 },
      { label: "Unlimited", value: 999, cost: 14999 },
    ],
  },
  {
    id: "teamMembers",
    title: "Team Members",
    description: "Agents who can access the shared inbox and dashboard.",
    type: "slider",
    options: [
      { label: "1", value: 1, cost: 0 },
      { label: "3", value: 3, cost: 1499 },
      { label: "5", value: 5, cost: 2499 },
      { label: "10", value: 10, cost: 4999 },
      { label: "Unlimited", value: 999, cost: 9999 },
    ],
  },
  {
    id: "broadcastLimit",
    title: "Broadcast Limit",
    description: "Maximum users you can message in a single broadcast campaign.",
    type: "select",
    options: [
      { label: "5,000", value: "5k", cost: 0 },
      { label: "10,000", value: "10k", cost: 999 },
      { label: "50,000", value: "50k", cost: 2999 },
      { label: "Unlimited", value: "unlimited", cost: 7999 },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    description: "Workflow builder and auto-reply rules.",
    type: "select",
    options: [
      { label: "Disabled", value: "disabled", cost: 0 },
      { label: "Basic", value: "basic", cost: 499 },
      { label: "Advanced", value: "advanced", cost: 1999 },
      { label: "AI Powered", value: "ai", cost: 4999 },
    ],
  },
  {
    id: "aiChatbot",
    title: "AI Chatbot",
    description: "Train an AI agent on your own data to answer queries 24/7.",
    type: "select",
    options: [
      { label: "OFF", value: "off", cost: 0 },
      { label: "Basic", value: "basic", cost: 1999 },
      { label: "Advanced", value: "advanced", cost: 4999 },
      { label: "Enterprise AI", value: "enterprise", cost: 9999 },
    ],
  },
  {
    id: "sharedInbox",
    title: "Shared Inbox",
    type: "toggle",
    options: [
      { label: "OFF", value: false, cost: 0 },
      { label: "ON", value: true, cost: 999 },
    ],
  },
  {
    id: "campaignAnalytics",
    title: "Campaign Analytics",
    type: "select",
    options: [
      { label: "Basic", value: "basic", cost: 0 },
      { label: "Advanced", value: "advanced", cost: 999 },
      { label: "Real-Time", value: "realtime", cost: 2499 },
    ],
  },
  {
    id: "webhookAccess",
    title: "Webhook Access",
    type: "toggle",
    options: [
      { label: "OFF", value: false, cost: 0 },
      { label: "ON", value: true, cost: 1499 },
    ],
  },
  {
    id: "restApi",
    title: "REST API",
    type: "toggle",
    options: [
      { label: "OFF", value: false, cost: 0 },
      { label: "ON", value: true, cost: 2999 },
    ],
  },
  {
    id: "prioritySupport",
    title: "Priority Support",
    type: "select",
    options: [
      { label: "Standard", value: "standard", cost: 0 },
      { label: "Priority", value: "priority", cost: 1999 },
      { label: "24×7", value: "24x7", cost: 4999 },
      { label: "Dedicated Manager", value: "dedicated", cost: 9999 },
    ],
  }
];
