export const pricingData = {
  basePlans: [
    { 
      id: 'starter', 
      title: 'Starter', 
      price: 49,
      description: 'Perfect for small teams getting started with automation.',
      icon: 'Zap' 
    },
    { 
      id: 'professional', 
      title: 'Professional', 
      price: 149,
      description: 'For growing companies that need more power and scale.',
      icon: 'Briefcase' 
    },
    { 
      id: 'enterprise', 
      title: 'Enterprise', 
      price: 499,
      description: 'Dedicated infrastructure and support for large organizations.',
      icon: 'Building2' 
    },
  ],
  contactTiers: [
    { id: '10k', label: 'Up to 10k', price: 0, included: true },
    { id: '50k', label: '10k - 50k', price: 50 },
    { id: '100k', label: '50k - 100k', price: 150 },
    { id: 'unlimited', label: 'Unlimited', price: 300 },
  ],
  modules: [
    { id: 'advanced_analytics', title: 'Advanced Analytics', price: 29 },
    { id: 'custom_reports', title: 'Custom Reports', price: 39 },
    { id: 'api_access', title: 'API Access', price: 49 },
    { id: 'webhook_integration', title: 'Webhook Integration', price: 19 },
    { id: 'ab_testing', title: 'A/B Testing', price: 25 },
    { id: 'team_inbox', title: 'Team Inbox (5 Users)', price: 45 },
  ],
  addons: [
    { id: 'whatsapp_api', title: 'WhatsApp Business API Setup', price: 99 },
    { id: 'dedicated_ip', title: 'Dedicated IP Address', price: 150 },
    { id: 'custom_branding', title: 'Custom Branding (Remove Watermark)', price: 49 },
    { id: 'priority_support', title: 'Priority 24/7 Support', price: 199 },
  ]
};
