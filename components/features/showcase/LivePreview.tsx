"use client";

import { useShowcaseStore } from "@/store/useShowcaseStore";
import { getPreviewData } from "@/mock/showcaseData";
import { motion, AnimatePresence } from "framer-motion";
import { Battery, Wifi, SignalHigh, MoreVertical, Phone, Video, Check, CheckCheck, Loader2, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function PhoneHeader() {
  return (
    <div className="bg-[#075e54] text-white p-3 pt-5 rounded-t-[2rem] flex flex-col gap-1 relative shadow-sm z-20 overflow-hidden">
      {/* iOS Status Bar */}
      <div className="flex justify-between items-center px-4 text-[10px] font-medium tracking-wide">
        <span>9:41</span>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-5 bg-black rounded-b-xl" /> {/* Dynamic Island */}
        <div className="flex items-center gap-1.5">
          <SignalHigh className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
          <Battery className="w-[14px] h-[14px]" />
        </div>
      </div>
      
      {/* WhatsApp Header */}
      <div className="flex items-center justify-between mt-1 px-1">
        <div className="flex items-center gap-2">
           <ArrowLeft className="w-5 h-5 opacity-90" />
           <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm relative border border-white/10">
             EMS
             <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-[#075e54]" />
           </div>
           <div className="flex flex-col leading-tight justify-center ml-0.5">
             <span className="font-semibold text-sm">Business Account</span>
             <span className="text-[10px] text-white/80">Online</span>
           </div>
        </div>
        <div className="flex items-center gap-4">
          <Video className="w-4 h-4 opacity-90" />
          <Phone className="w-4 h-4 opacity-90" />
          <MoreVertical className="w-4 h-4 opacity-90" />
        </div>
      </div>
    </div>
  );
}

export function LivePreview() {
  const { campaignConfig } = useShowcaseStore();
  const [previewData, setPreviewData] = useState(() => getPreviewData(campaignConfig));
  const [messageState, setMessageState] = useState<'typing' | 'sent' | 'delivered' | 'read'>('typing');

  // Simulate message delivery flow
  useEffect(() => {
    setPreviewData(getPreviewData(campaignConfig));
    setMessageState('typing');

    const t1 = setTimeout(() => setMessageState('sent'), 1500);
    const t2 = setTimeout(() => setMessageState('delivered'), 2500);
    const t3 = setTimeout(() => setMessageState('read'), 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [campaignConfig]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-background p-6 lg:p-8">
      
      {/* Phone Mockup Frame */}
      <motion.div 
        key="phone-mockup"
        className="w-[300px] h-[620px] bg-[#e5ddd5] border-[10px] border-slate-900 rounded-[2.5rem] shadow-2xl relative flex flex-col overflow-hidden ring-1 ring-border"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0,0,0,0.05) inset'
        }}
      >
        <PhoneHeader />

        {/* Chat Background */}
        <div className="absolute inset-0 bg-[#e5ddd5] opacity-50 z-0 bg-[url('https://i.pinimg.com/originals/8f/ba/cb/8fbacbd464e996966eb9d4a6b7a9c21e.jpg')] bg-cover" />

        {/* Chat Messages */}
        <div className="flex-1 p-3 flex flex-col gap-3 justify-end z-10 pb-4 overflow-y-auto hide-scrollbar">
          
          <div className="flex justify-center mb-2">
             <span className="bg-[#e1f3fb] text-[#2c748c] text-[10px] px-3 py-1 rounded-md shadow-sm font-medium">Today</span>
          </div>
          
          <div className="flex justify-center mb-2">
             <span className="bg-[#feebc8] text-[#9c4221] text-[10px] px-3 py-2 rounded-md shadow-sm text-center max-w-[90%] leading-relaxed">
               <span className="font-semibold">Messages and calls are end-to-end encrypted.</span> No one outside of this chat, not even WhatsApp, can read or listen to them.
             </span>
          </div>

          <AnimatePresence mode="wait">
            {messageState === 'typing' ? (
              <motion.div 
                key="typing"
                initial={{ opacity: 0, scale: 0.9, y: 10, originX: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, originX: 0 }}
                className="bg-white p-3 rounded-xl rounded-tl-sm w-16 shadow-sm relative text-sm text-gray-500 flex items-center gap-1 h-10"
              >
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
              </motion.div>
            ) : (
              <motion.div 
                key={campaignConfig.campaignType + campaignConfig.messageType}
                initial={{ opacity: 0, scale: 0.9, y: 20, originX: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-white p-[3px] rounded-xl rounded-tl-sm max-w-[85%] shadow-sm relative text-[13px] text-[#303030] leading-relaxed flex flex-col"
              >
                
                {campaignConfig.messageType === 'image' && (
                  <div className="w-full h-36 bg-slate-100 rounded-lg mb-1 flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" alt="Promo" className="w-full h-full object-cover" />
                  </div>
                )}
                {campaignConfig.messageType === 'video' && (
                  <div className="w-full h-36 bg-slate-900 rounded-lg mb-1 flex items-center justify-center relative overflow-hidden group">
                     <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center z-10 backdrop-blur-sm border border-white/20">
                       <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-white ml-1" />
                     </div>
                     <img src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2069&auto=format&fit=crop" alt="Promo" className="w-full h-full object-cover absolute inset-0 opacity-60 mix-blend-overlay" />
                  </div>
                )}
                
                <div className="px-2 pt-1 pb-1">
                  <div className="font-bold text-[#075e54] mb-1 leading-none">{previewData.title}</div>
                  <span className="whitespace-pre-wrap">{previewData.message}</span>
                </div>
                
                {/* Footer of message */}
                <div className="flex justify-end items-center gap-1 pr-2 pb-1 -mt-1">
                  <span className="text-[10px] text-gray-400 font-medium">9:41 AM</span>
                  {messageState === 'sent' && <Check className="w-3.5 h-3.5 text-gray-400" />}
                  {messageState === 'delivered' && <CheckCheck className="w-3.5 h-3.5 text-gray-400" />}
                  {messageState === 'read' && <CheckCheck className="w-3.5 h-3.5 text-blue-500" />}
                </div>

                {/* Interactive Buttons (e.g. CTA) */}
                <div className="flex flex-col gap-[1px] mt-1 bg-gray-200 rounded-b-lg overflow-hidden border-t border-gray-100">
                  <button className="bg-white py-2 text-[#00a884] font-medium text-sm hover:bg-gray-50 transition-colors flex justify-center items-center gap-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    View Offer
                  </button>
                  <button className="bg-white py-2 text-[#00a884] font-medium text-sm hover:bg-gray-50 transition-colors flex justify-center items-center gap-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    Reply
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input Area */}
        <div className="bg-[#f0f0f0] p-2 flex items-center gap-2 z-10 relative">
           <div className="bg-white flex-1 rounded-full h-10 px-4 flex items-center gap-2 text-sm text-gray-400 shadow-sm border border-transparent">
             <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
             <span className="flex-1 text-left">Message</span>
             <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
           </div>
           <div className="w-10 h-10 rounded-full bg-[#00a884] text-white flex items-center justify-center shadow-sm hover:bg-[#008f6f] transition-colors cursor-pointer">
             <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
           </div>
        </div>
      </motion.div>

    </div>
  );
}
