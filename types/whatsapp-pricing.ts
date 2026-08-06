export type BillingCycle = "monthly" | "annually";

export interface WhatsAppPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  recommended?: boolean;
  baseConversations: number;
  baseNumbers: number;
  baseTeamMembers: number;
  baseBroadcastLimit: string;
  features: string[];
}

export interface CustomizationOption {
  id: string;
  title: string;
  description?: string;
  type: "slider" | "select" | "toggle";
  options?: { label: string; value: string | number | boolean; cost: number }[];
}

export interface PricingState {
  planId: string;
  billingCycle: BillingCycle;
  conversations: number;
  numbers: number;
  teamMembers: number;
  broadcastLimit: string;
  automation: string;
  aiChatbot: string;
  sharedInbox: boolean;
  campaignAnalytics: string;
  webhookAccess: boolean;
  restApi: boolean;
  prioritySupport: string;
}
