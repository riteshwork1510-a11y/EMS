import { create } from 'zustand';

export interface CampaignConfig {
  campaignType: string;
  audience: string;
  contacts: number;
  messageType: string;
  schedule: string;
  automationLevel: string;
  analyticsLevel: string;
}

interface ShowcaseState {
  activeFeature: string;
  campaignConfig: CampaignConfig;
  setActiveFeature: (feature: string) => void;
  updateCampaignConfig: (key: keyof CampaignConfig, value: string | number) => void;
}

export const useShowcaseStore = create<ShowcaseState>((set) => ({
  activeFeature: 'campaigns',
  campaignConfig: {
    campaignType: 'festival',
    audience: 'customers',
    contacts: 5000,
    messageType: 'text',
    schedule: 'now',
    automationLevel: 'basic',
    analyticsLevel: 'standard',
  },
  setActiveFeature: (feature) => set({ activeFeature: feature }),
  updateCampaignConfig: (key, value) => set((state) => ({
    campaignConfig: {
      ...state.campaignConfig,
      [key]: value
    }
  })),
}));
