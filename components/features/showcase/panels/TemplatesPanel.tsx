"use client";

import { motion } from "framer-motion";
import { Plus, Image as ImageIcon, FileText, PlaySquare, LayoutTemplate, MoreVertical } from "lucide-react";

const templates = [
  { id: 1, name: "abandoned_cart_v1", type: "Marketing", format: "Text + Image + CTA", language: "English", status: "Approved" },
  { id: 2, name: "order_confirmation", type: "Utility", format: "Text only", language: "English", status: "Approved" },
  { id: 3, name: "diwali_mega_sale", type: "Marketing", format: "Carousel", language: "Hindi", status: "Pending" },
  { id: 4, name: "otp_verification", type: "Authentication", format: "Text + Copy Code", language: "English", status: "Approved" },
  { id: 5, name: "welcome_onboarding", type: "Utility", format: "Video + CTA", language: "English", status: "Approved" }
];

export function TemplatesPanel() {
  return (
    <div className="flex flex-col h-full bg-background/50">
      <div className="p-6 border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Message Templates</h2>
          <p className="text-sm text-muted-foreground">Manage your pre-approved WhatsApp templates</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" /> Create Template
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
           <div className="p-4 bg-card border border-border/50 rounded-xl">
             <div className="text-muted-foreground text-xs font-semibold uppercase mb-1">Total</div>
             <div className="text-2xl font-bold">142</div>
           </div>
           <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-700">
             <div className="text-xs font-semibold uppercase mb-1">Approved</div>
             <div className="text-2xl font-bold">135</div>
           </div>
           <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-700">
             <div className="text-xs font-semibold uppercase mb-1">Pending</div>
             <div className="text-2xl font-bold">5</div>
           </div>
           <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-700">
             <div className="text-xs font-semibold uppercase mb-1">Rejected</div>
             <div className="text-2xl font-bold">2</div>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {templates.map((tpl, i) => (
            <motion.div 
              key={tpl.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1">{tpl.name}</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-medium px-2 py-0.5 bg-slate-100 rounded-md">{tpl.type}</span>
                  <span>•</span>
                  <span>{tpl.format}</span>
                  <span>•</span>
                  <span>{tpl.language}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  tpl.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                }`}>
                  {tpl.status}
                </span>
                <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
