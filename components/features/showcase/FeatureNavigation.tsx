"use client";

import { useShowcaseStore } from "@/store/useShowcaseStore";
import { showcaseData } from "@/mock/showcaseData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export function FeatureNavigation() {
  const { activeFeature, setActiveFeature } = useShowcaseStore();

  return (
    <div className="flex flex-col gap-2">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-3">
          Modules
        </h3>
      </div>
      <div className="flex flex-col gap-1 pr-4">
        {showcaseData.features.map((feature) => {
          const Icon = (Icons as any)[feature.icon];
          const isActive = activeFeature === feature.id;

          return (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={cn(
                "relative flex items-start gap-3 w-full text-left p-3 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary/5 text-primary shadow-sm ring-1 ring-primary/20" 
                  : "hover:bg-muted text-foreground/80 hover:text-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFeatureIndicator"
                  className="absolute inset-0 rounded-xl bg-primary/5 border border-primary/20 -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              <div className={cn(
                "p-2 rounded-lg transition-colors",
                isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground group-hover:bg-background group-hover:text-foreground group-hover:shadow-sm"
              )}>
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="flex flex-col flex-1">
                <span className={cn(
                  "font-medium transition-colors text-sm",
                  isActive ? "text-primary font-semibold" : "text-foreground"
                )}>
                  {feature.title}
                </span>
                <span className="text-xs text-muted-foreground truncate">
                  {feature.description}
                </span>
              </div>
              
              {isActive && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
