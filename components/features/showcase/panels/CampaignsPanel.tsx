"use client";

import { useShowcaseStore } from "@/store/useShowcaseStore";
import { showcaseData } from "@/mock/showcaseData";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

function SectionTitle({ title }: { title: string }) {
  return (
    <h4 className="text-sm font-semibold text-foreground/80 mb-3 uppercase tracking-wider">{title}</h4>
  );
}

export function CampaignsPanel() {
  const { campaignConfig, updateCampaignConfig } = useShowcaseStore();

  return (
    <div className="flex flex-col h-full bg-background/50">
      <div className="p-6 border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Campaign Settings</h2>
          <p className="text-sm text-muted-foreground">Configure your message broadcast parameters</p>
        </div>
        <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
          Live Editor
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-10 custom-scrollbar">

        {/* Campaign Type */}
        <div className="space-y-4">
          <SectionTitle title="Campaign Type" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {showcaseData.campaignTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => updateCampaignConfig('campaignType', type.id)}
                className={cn(
                  "px-4 py-3 rounded-xl border text-sm font-medium transition-all",
                  campaignConfig.campaignType === type.id
                    ? "border-primary bg-primary/5 text-primary shadow-sm"
                    : "border-border bg-card hover:bg-muted/50 hover:border-border/80 text-foreground/80"
                )}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div className="space-y-4">
          <SectionTitle title="Audience Segment" />
          <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-xl">
            {showcaseData.audiences.map((aud) => (
              <button
                key={aud.id}
                onClick={() => updateCampaignConfig('audience', aud.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 text-center whitespace-nowrap",
                  campaignConfig.audience === aud.id
                    ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {aud.label}
              </button>
            ))}
          </div>
        </div>

        {/* Number of Contacts */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <SectionTitle title="Target Volume" />
            <span className="text-xs font-medium px-2 py-1 bg-muted rounded-md text-muted-foreground">
              {campaignConfig.contacts.toLocaleString()} Contacts
            </span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {showcaseData.contactNumbers.map((num) => (
              <button
                key={num}
                onClick={() => updateCampaignConfig('contacts', num)}
                className={cn(
                  "py-2 rounded-lg text-sm font-medium border transition-all",
                  campaignConfig.contacts === num
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/70 border-border hover:bg-muted"
                )}
              >
                {num >= 1000 ? `${num / 1000}k` : num}
              </button>
            ))}
          </div>
        </div>

        {/* Message Type */}
        <div className="space-y-4">
          <SectionTitle title="Message Format" />
          <div className="grid grid-cols-5 gap-3">
            {showcaseData.messageTypes.map((msg) => {
              const Icon = (Icons as any)[msg.icon];
              const isSelected = campaignConfig.messageType === msg.id;
              return (
                <button
                  key={msg.id}
                  onClick={() => updateCampaignConfig('messageType', msg.id)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-2 p-3 rounded-xl border transition-all",
                    isSelected
                      ? "border-primary bg-primary/5 text-primary shadow-sm"
                      : "border-border bg-card hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className={cn("w-5 h-5", isSelected ? "text-primary" : "text-muted-foreground")} />
                  <span className="text-xs font-medium">{msg.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-4">
          <SectionTitle title="Schedule" />
          <div className="flex gap-2">
            {showcaseData.schedules.map((sch) => (
              <button
                key={sch.id}
                onClick={() => updateCampaignConfig('schedule', sch.id)}
                className={cn(
                  "flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all",
                  campaignConfig.schedule === sch.id
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-card hover:bg-muted/50 text-foreground/80"
                )}
              >
                {sch.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
          <div className="space-y-4">
            <SectionTitle title="Automation Engine" />
            <div className="flex flex-col gap-2">
              {showcaseData.automationLevels.map((lvl) => (
                <label key={lvl.id} className={cn(
                  "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all",
                  campaignConfig.automationLevel === lvl.id ? "bg-muted/50 border-primary/50" : "bg-card border-border hover:bg-muted/30"
                )}>
                  <div className={cn(
                    "w-4 h-4 rounded-full border flex items-center justify-center transition-colors",
                    campaignConfig.automationLevel === lvl.id ? "border-primary bg-primary" : "border-muted-foreground"
                  )}>
                    {campaignConfig.automationLevel === lvl.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="text-sm font-medium">{lvl.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <SectionTitle title="Analytics Tier" />
            <div className="flex flex-col gap-2">
              {showcaseData.analyticsLevels.map((lvl) => (
                <label key={lvl.id} className={cn(
                  "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all",
                  campaignConfig.analyticsLevel === lvl.id ? "bg-muted/50 border-primary/50" : "bg-card border-border hover:bg-muted/30"
                )}>
                  <div className={cn(
                    "w-4 h-4 rounded-full border flex items-center justify-center transition-colors",
                    campaignConfig.analyticsLevel === lvl.id ? "border-primary bg-primary" : "border-muted-foreground"
                  )}>
                    {campaignConfig.analyticsLevel === lvl.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="text-sm font-medium">{lvl.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
