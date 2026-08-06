"use client";

import { motion } from "framer-motion";
import { Plus, Zap, ArrowRight, MessageSquare, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const workflows = [
  {
    id: 1,
    name: "Abandoned Cart Recovery",
    status: "active",
    trigger: { icon: Clock, text: "2 hours after cart abandonment" },
    action: { icon: MessageSquare, text: "Send 10% discount offer" },
    metrics: { sent: 1240, recovered: "₹3,50,000" }
  },
  {
    id: 2,
    name: "New Lead Welcome Series",
    status: "active",
    trigger: { icon: Users, text: "Added to 'New Leads' segment" },
    action: { icon: MessageSquare, text: "Send Intro Video + PDF" },
    metrics: { sent: 3850, recovered: "45% conversion" }
  },
  {
    id: 3,
    name: "Post-Purchase Follow up",
    status: "paused",
    trigger: { icon: Clock, text: "3 days after delivery" },
    action: { icon: MessageSquare, text: "Request product review" },
    metrics: { sent: 890, recovered: "120 reviews" }
  }
];

export function AutomationPanel() {
  return (
    <div className="flex flex-col h-full bg-background/50">
      <div className="p-6 border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Automation Workflows</h2>
          <p className="text-sm text-muted-foreground">Build and manage trigger-based campaigns</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" /> New Workflow
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
        {workflows.map((workflow, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={workflow.id}
            className="bg-card border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  workflow.status === 'active' ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : "bg-slate-300"
                )} />
                <h3 className="font-semibold text-lg">{workflow.name}</h3>
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span><strong className="text-foreground">{workflow.metrics.sent}</strong> fired</span>
                <span><strong className="text-foreground">{workflow.metrics.recovered}</strong></span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-lg border border-border/50">
              <div className="flex-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <workflow.trigger.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Trigger</div>
                  <div className="text-sm font-medium">{workflow.trigger.text}</div>
                </div>
              </div>

              <div className="flex-shrink-0 text-muted-foreground">
                <ArrowRight className="w-5 h-5" />
              </div>

              <div className="flex-1 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <workflow.action.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Action</div>
                  <div className="text-sm font-medium">{workflow.action.text}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
