"use client";

import { FeatureNavigation } from "./FeatureNavigation";
import { ConfigurationPanel } from "./ConfigurationPanel";
import { LivePreview } from "./LivePreview";
import { AnalyticsPanel } from "./AnalyticsPanel";

export function InteractiveShowcase() {
  return (
    <div className="w-full max-w-7xl mx-auto rounded-3xl border bg-card shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[800px] my-12">
      
      {/* Left Column: Navigation */}
      <div className="w-full lg:w-72 bg-muted/20 p-6 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-border/50 hidden md:block">
        <FeatureNavigation />
      </div>

      {/* Mobile Navigation Placeholder (simplified for space) */}
      <div className="w-full md:hidden p-4 border-b border-border/50 bg-muted/20 overflow-x-auto whitespace-nowrap hide-scrollbar flex gap-2">
         <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
           Campaigns (Selected)
         </span>
         <span className="px-4 py-2 text-muted-foreground text-sm font-medium rounded-full border border-transparent">
           Broadcast
         </span>
         <span className="px-4 py-2 text-muted-foreground text-sm font-medium rounded-full border border-transparent">
           Contacts
         </span>
      </div>

      {/* Center Column: Configuration */}
      <div className="flex-1 min-w-0 bg-background/50 relative">
        <ConfigurationPanel />
      </div>

      {/* Right Column: Live Preview & Analytics */}
      <div className="w-full lg:w-[400px] xl:w-[450px] bg-muted/10 border-t lg:border-t-0 lg:border-l border-border/50 flex-shrink-0 flex flex-col h-full overflow-y-auto custom-scrollbar">
        <LivePreview />
        <AnalyticsPanel />
      </div>
      
    </div>
  );
}
