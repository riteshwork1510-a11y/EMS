export interface Service {
  id: string;
  title: string;
  basePrice: number;
  description: string;
  icon: string;
}

export interface OptionValue {
  id: string;
  label: string;
  price: number;
  included?: boolean;
}

export interface OptionGroup {
  id: string;
  title: string;
  description?: string;
  values: OptionValue[];
}

export interface Addon {
  id: string;
  title: string;
  price: number;
}

export interface TimelineOption {
  id: string;
  title: string;
  multiplier: number; // e.g., 1.5 for Urgent
}

export interface ClientDetails {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  expectedBudget: string;
  projectDescription: string;
  agreement: boolean;
}

export interface PricingState {
  // State
  activeService: string;
  selectedOptions: Record<string, string>; // optionGroupId -> optionValueId
  selectedAddons: string[];
  timeline: string;
  promoCode: string;
  includeTax: boolean;
  clientDetails: ClientDetails;

  // Actions
  setActiveService: (serviceId: string, defaultOptions: Record<string, string>) => void;
  setOption: (groupId: string, valueId: string) => void;
  toggleAddon: (addonId: string) => void;
  setTimeline: (timelineId: string) => void;
  setPromoCode: (code: string) => void;
  setIncludeTax: (include: boolean) => void;
  updateClientDetails: (details: Partial<ClientDetails>) => void;
}
