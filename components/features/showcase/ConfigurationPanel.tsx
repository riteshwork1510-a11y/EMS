"use client";

import { useShowcaseStore } from "@/store/useShowcaseStore";
import { CampaignsPanel } from "./panels/CampaignsPanel";
import { AutomationPanel } from "./panels/AutomationPanel";
import { ContactsPanel } from "./panels/ContactsPanel";
import { TemplatesPanel } from "./panels/TemplatesPanel";
import { InboxPanel } from "./panels/InboxPanel";
import { AnalyticsReportsPanel } from "./panels/AnalyticsReportsPanel";

export function ConfigurationPanel() {
  const { activeFeature } = useShowcaseStore();

  switch (activeFeature) {
    case 'campaigns':
    case 'broadcast': // Render same for broadcast for now
      return <CampaignsPanel />;
    case 'automation':
      return <AutomationPanel />;
    case 'contacts':
      return <ContactsPanel />;
    case 'templates':
      return <TemplatesPanel />;
    case 'inbox':
      return <InboxPanel />;
    case 'analytics':
    case 'reports':
      return <AnalyticsReportsPanel />;
    default:
      return <CampaignsPanel />;
  }
}

