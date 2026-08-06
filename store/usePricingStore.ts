import { create } from 'zustand';
import { ClientDetails, PricingState } from '@/types/pricing';

export const usePricingStore = create<PricingState>((set) => ({
  activeService: 'static_website',
  selectedOptions: {},
  selectedAddons: [],
  timeline: 'standard',
  promoCode: '',
  includeTax: true,
  clientDetails: {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    expectedBudget: '',
    projectDescription: '',
    agreement: false,
  },

  setActiveService: (serviceId, defaultOptions) => 
    set({ 
      activeService: serviceId, 
      selectedOptions: defaultOptions,
      selectedAddons: [],
      timeline: 'standard'
    }),
    
  setOption: (groupId, valueId) => 
    set((state) => ({
      selectedOptions: {
        ...state.selectedOptions,
        [groupId]: valueId
      }
    })),
    
  toggleAddon: (addonId) => 
    set((state) => ({
      selectedAddons: state.selectedAddons.includes(addonId)
        ? state.selectedAddons.filter(id => id !== addonId)
        : [...state.selectedAddons, addonId]
    })),
    
  setTimeline: (timelineId) => set({ timeline: timelineId }),
  
  setPromoCode: (code) => set({ promoCode: code }),
  
  setIncludeTax: (include) => set({ includeTax: include }),

  updateClientDetails: (details) => 
    set((state) => ({
      clientDetails: {
        ...state.clientDetails,
        ...details
      }
    })),
}));
