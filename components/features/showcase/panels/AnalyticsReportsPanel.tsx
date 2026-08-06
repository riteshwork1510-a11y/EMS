"use client";

import { motion } from "framer-motion";
import { BarChart2, TrendingUp, Download, Calendar, ArrowUpRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function AnalyticsReportsPanel() {
  return (
    <div className="flex flex-col h-full bg-background/50">
      <div className="p-6 border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Analytics & Reports</h2>
          <p className="text-sm text-muted-foreground">Measure campaign performance</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-card border border-border/50 text-foreground text-sm font-medium rounded-lg shadow-sm hover:bg-muted flex items-center gap-2 transition-colors">
            <Calendar className="w-4 h-4" /> Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { label: "Total Sent", value: "245.8k", trend: "+12.5%", color: "text-blue-500", icon: Activity },
             { label: "Delivery Rate", value: "98.2%", trend: "+1.1%", color: "text-emerald-500", icon: TrendingUp },
             { label: "Read Rate", value: "84.5%", trend: "+5.4%", color: "text-purple-500", icon: BarChart2 },
             { label: "Reply Rate", value: "14.2%", trend: "-0.5%", color: "text-amber-500", icon: ArrowUpRight }
           ].map((kpi, i) => (
             <motion.div 
               key={kpi.label}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-card border border-border/50 rounded-xl p-4 shadow-sm"
             >
               <div className="flex items-center justify-between mb-2">
                 <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{kpi.label}</span>
                 <kpi.icon className={cn("w-4 h-4", kpi.color)} />
               </div>
               <div className="text-2xl font-bold mb-1">{kpi.value}</div>
               <div className={cn("text-xs font-medium", kpi.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500')}>
                 {kpi.trend} vs last month
               </div>
             </motion.div>
           ))}
        </div>

        {/* Fake Chart Area */}
        <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
          <h3 className="font-bold mb-6">Delivery vs Read Rates (Last 7 Days)</h3>
          <div className="h-48 flex items-end justify-between gap-2 px-4">
            {[40, 60, 45, 80, 50, 90, 75].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                <motion.div 
                  initial={{ height: 0 }} 
                  animate={{ height: `${val}%` }}
                  transition={{ delay: 0.3 + (i * 0.05), type: "spring" }}
                  className="w-full bg-primary/20 rounded-t-sm relative group-hover:bg-primary/30 transition-colors"
                >
                  <motion.div 
                     initial={{ height: 0 }} 
                     animate={{ height: `${val * 0.85}%` }}
                     transition={{ delay: 0.5 + (i * 0.05), type: "spring" }}
                     className="absolute bottom-0 w-full bg-primary rounded-t-sm group-hover:bg-primary/90 transition-colors" 
                  />
                </motion.div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs font-medium text-muted-foreground px-4">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

      </div>
    </div>
  );
}
