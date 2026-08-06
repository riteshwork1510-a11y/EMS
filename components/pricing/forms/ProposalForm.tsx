"use client";

import { usePricingStore } from "@/store/usePricingStore";
import { User, Building2, Mail, Phone, Globe, DollarSign } from "lucide-react";

export function ProposalForm() {
  const { clientDetails, updateClientDetails } = usePricingStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateClientDetails({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 pt-4">
      <div className="mb-6">
        <h4 className="text-lg font-bold text-slate-800 tracking-tight">Generate Official Proposal</h4>
        <p className="text-xs text-slate-500 mt-1">Fill out your details to generate a downloadable PDF quotation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
          <div className="relative">
             <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="text" name="fullName" value={clientDetails.fullName} onChange={handleChange} placeholder="John Doe" className="w-full h-11 pl-10 pr-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
        </div>
        
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Company Name</label>
          <div className="relative">
             <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="text" name="companyName" value={clientDetails.companyName} onChange={handleChange} placeholder="Acme Corp" className="w-full h-11 pl-10 pr-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
          <div className="relative">
             <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="email" name="email" value={clientDetails.email} onChange={handleChange} placeholder="john@acmecorp.com" className="w-full h-11 pl-10 pr-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Phone Number</label>
          <div className="relative">
             <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="tel" name="phone" value={clientDetails.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full h-11 pl-10 pr-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
        </div>
      </div>
      
      <div className="space-y-1.5">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Project Description (Optional)</label>
        <textarea name="projectDescription" value={clientDetails.projectDescription} onChange={handleChange} placeholder="Briefly describe your project goals..." className="w-full min-h-[100px] p-4 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y" />
      </div>

    </div>
  );
}
