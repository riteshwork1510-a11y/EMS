"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white relative overflow-hidden">
      {/* Premium subtle background glow */}
      
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start">
            <Link href="/" className="relative w-[180px] h-[48px] mb-6">
              <Image 
                src="/logo.png" 
                alt="EasyMsgSender Logo" 
                fill
                className="object-contain object-left" 
              />
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
              Automate your messaging and drive massive growth with our powerful, intuitive platform built for modern enterprises.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm">
                <span className="sr-only">Twitter</span>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-secondary hover:border-secondary hover:text-white transition-all shadow-sm">
                <span className="sr-only">LinkedIn</span>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-2">Product</h4>
            <Link href="/features" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Features</Link>
            <Link href="#integrations" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Integrations</Link>
            <Link href="/pricing" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Pricing</Link>
            <Link href="#changelog" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Changelog</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-2">Company</h4>
            <Link href="#about" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">About Us</Link>
            <Link href="#careers" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Careers</Link>
            <Link href="#blog" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Blog</Link>
            <Link href="#contact" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-2">Legal</h4>
            <Link href="#privacy" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#dpa" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Data Processing</Link>
          </div>

          <div className="col-span-2 lg:col-span-1 lg:pl-8">
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Get the latest updates and marketing tips sent directly to your inbox.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-inner" 
              />
              <button 
                type="submit" 
                className="bg-slate-900 text-white font-bold text-sm rounded-xl px-4 py-3 hover:bg-slate-800 transition-all shadow-sm active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium text-slate-500">
            &copy; {new Date().getFullYear()} EasyMsgSender. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#status" className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-secondary transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              All systems operational
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
