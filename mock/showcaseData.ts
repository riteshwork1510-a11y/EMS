export const showcaseData = {
  features: [
    { id: 'campaigns', title: 'Campaigns', description: 'Build & send bulk messages', icon: 'Megaphone' },
    { id: 'contacts', title: 'Contacts', description: 'Manage & segment audiences', icon: 'Users' },
    { id: 'templates', title: 'Templates', description: 'Rich message templates', icon: 'LayoutTemplate' },
    { id: 'automation', title: 'Automation', description: 'Trigger-based workflows', icon: 'Workflow' },
    { id: 'inbox', title: 'Inbox', description: 'Shared team inbox', icon: 'Inbox' },
    { id: 'analytics', title: 'Analytics', description: 'Deep campaign insights', icon: 'BarChart2' },
  ],
  campaignTypes: [
    { id: 'promotional', label: 'Promotional' },
    { id: 'offer', label: 'Offer' },
    { id: 'announcement', label: 'Announcement' },
    { id: 'reminder', label: 'Reminder' },
    { id: 'festival', label: 'Festival' },
    { id: 'welcome', label: 'Welcome' },
  ],
  audiences: [
    { id: 'all', label: 'All Contacts' },
    { id: 'customers', label: 'Customers' },
    { id: 'vip', label: 'VIP' },
    { id: 'new_leads', label: 'New Leads' },
    { id: 'returning', label: 'Returning Customers' },
  ],
  contactNumbers: [100, 500, 1000, 5000, 10000],
  messageTypes: [
    { id: 'text', label: 'Text', icon: 'Type' },
    { id: 'image', label: 'Image', icon: 'Image' },
    { id: 'video', label: 'Video', icon: 'Video' },
    { id: 'pdf', label: 'PDF', icon: 'FileText' },
    { id: 'carousel', label: 'Carousel', icon: 'GalleryHorizontal' },
  ],
  schedules: [
    { id: 'now', label: 'Send Now' },
    { id: 'today', label: 'Today' },
    { id: 'tomorrow', label: 'Tomorrow' },
    { id: 'pick_date', label: 'Pick Date' },
  ],
  automationLevels: [
    { id: 'disabled', label: 'Disabled' },
    { id: 'basic', label: 'Basic' },
    { id: 'advanced', label: 'Advanced' },
  ],
  analyticsLevels: [
    { id: 'disabled', label: 'Disabled' },
    { id: 'standard', label: 'Standard' },
    { id: 'real_time', label: 'Real Time' },
  ],
};

export const getPreviewData = (config: any) => {
  // Generate realistic sounding mock data based on config
  
  let title = "Campaign Draft";
  let message = "Hi there! This is a placeholder message.";
  
  if (config.campaignType === 'festival') {
    title = "Diwali Mega Sale";
    message = "🎉 Diwali Mega Sale is live! Get up to 50% off on your favorite items. Shop now and celebrate with joy! 🪔";
  } else if (config.campaignType === 'welcome') {
    title = "Welcome Series";
    message = "Hi! Welcome to the family. We're so glad you're here. Here's a 10% discount code for your first purchase: WELCOME10.";
  } else if (config.campaignType === 'promotional') {
    title = "Summer Collection Promo";
    message = "☀️ Our new Summer Collection just dropped! Be the first to check out the hottest trends this season.";
  } else if (config.campaignType === 'offer') {
    title = "Weekend Flash Sale";
    message = "⚡ Flash Sale Alert! 24 hours only. Buy 1 Get 1 Free on all accessories. Don't miss out!";
  } else if (config.campaignType === 'announcement') {
    title = "Store Relocation";
    message = "📢 We are moving! Starting next Monday, visit our new flagship store at 123 Main Street.";
  } else if (config.campaignType === 'reminder') {
    title = "Cart Abandonment";
    message = "Hi! We noticed you left some items in your cart. Complete your purchase now and we'll throw in free shipping!";
  }

  // Calculate some realistic metrics based on audience size
  const baseRate = config.audience === 'vip' ? 0.95 : config.audience === 'returning' ? 0.85 : 0.75;
  const readRateVal = config.analyticsLevel !== 'disabled' ? Math.floor(baseRate * 100) : 0;
  const expectedRepliesVal = Math.floor(config.contacts * (baseRate * 0.15));

  return {
    title,
    message,
    audienceLabel: showcaseData.audiences.find(a => a.id === config.audience)?.label || 'Contacts',
    contactsCount: config.contacts,
    status: config.schedule === 'now' ? 'Sending in progress...' : 'Scheduled for later',
    estimatedDelivery: config.analyticsLevel !== 'disabled' ? '98%' : '-',
    readRate: config.analyticsLevel !== 'disabled' ? `${readRateVal}%` : '-',
    expectedReplies: config.analyticsLevel !== 'disabled' ? expectedRepliesVal.toLocaleString() : '-',
  };
};
