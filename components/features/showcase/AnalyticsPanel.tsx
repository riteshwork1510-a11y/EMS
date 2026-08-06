"use client";

import { useShowcaseStore } from "@/store/useShowcaseStore";
import { getPreviewData } from "@/mock/showcaseData";
import { motion } from "framer-motion";
import { Users, CheckCircle2, Eye, Reply, MousePointerClick, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function AnimatedCounter({ value, duration = 1 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    let totalMilSecDur = parseInt(duration.toString());
    let incrementTime = (totalMilSecDur / end) * 1000;
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 20);
      if (start > end) start = end;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export function AnalyticsPanel() {
  const { campaignConfig } = useShowcaseStore();
  const [previewData, setPreviewData] = useState(() => getPreviewData(campaignConfig));

  useEffect(() => {
    setPreviewData(getPreviewData(campaignConfig));
  }, [campaignConfig]);

  const metrics = [
    { label: "Reach", value: previewData.contactsCount, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Delivered", value: Math.round(previewData.contactsCount * 0.98), icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Read", value: Math.round(previewData.contactsCount * (parseInt(previewData.readRate) / 100)), icon: Eye, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Replies", value: parseInt(previewData.expectedReplies.replace(/,/g, '')), icon: Reply, color: "text-amber-500", bg: "bg-amber-500/10" },
  ];

  return (
    <div className="w-full flex flex-col gap-4 mt-8 px-6 lg:px-8 pb-8">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold tracking-tight text-foreground flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" /> Live Analytics
        </h4>
        <span className="text-[10px] font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider">
          Simulated
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={`${metric.label}-${metric.value}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border rounded-xl p-3 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={cn("w-6 h-6 rounded-md flex items-center justify-center", metric.bg, metric.color)}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
              </div>
              <div className="text-xl font-bold tracking-tight">
                <AnimatedCounter value={metric.value} />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Smart Summary */}
      <motion.div 
        key={`summary-${campaignConfig.campaignType}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-2 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-4 shadow-lg border border-slate-700 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <h5 className="text-xs text-slate-300 font-semibold mb-3 uppercase tracking-wider">Smart Campaign Summary</h5>
        <div className="space-y-3 text-sm relative z-10">
          <div className="flex justify-between items-center border-b border-slate-700/50 pb-2">
            <span className="text-slate-400">Campaign Name</span>
            <span className="font-medium text-right max-w-[150px] truncate">{previewData.title}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-700/50 pb-2">
            <span className="text-slate-400">Target Audience</span>
            <span className="font-medium">{previewData.audienceLabel}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-700/50 pb-2">
            <span className="text-slate-400">Est. Duration</span>
            <span className="font-medium">{previewData.estimatedDelivery}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Conversion Cost</span>
            <span className="font-bold text-emerald-400">~₹0.80/msg</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
