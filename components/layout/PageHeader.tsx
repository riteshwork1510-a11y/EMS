"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function PageHeader() {
  const pathname = usePathname();
  
  // Format the pathname into a readable page name
  const pageName = pathname === '/' 
    ? 'Home' 
    : pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1).replace(/-/g, ' ');

  return (
    <div className="w-full bg-slate-50 border-b border-slate-200/80 py-2.5 sm:py-3 sticky top-[64px] lg:top-[80px] z-40 backdrop-blur-md bg-slate-50/95 mt-[64px] lg:mt-[80px]">
      <div className="w-full flex items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base px-2 sm:px-4">
        
        {/* Breadcrumb Section */}
        <div className="flex items-center font-semibold text-slate-600">
          <span className="text-slate-500 hidden sm:inline-block hover:text-slate-900 transition-colors cursor-pointer">EasyMsgSender</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mx-1 sm:mx-2 text-slate-400 hidden sm:inline-block" />
          <span className="text-slate-900 font-bold">{pageName}</span>
        </div>
        
        <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
        
        {/* Right Tagline */}
        <div className="text-slate-600 text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="hidden sm:inline">Official WhatsApp API Provider</span>
          <span className="sm:hidden">WhatsApp API</span>
        </div>
        
      </div>
    </div>
  );
}
