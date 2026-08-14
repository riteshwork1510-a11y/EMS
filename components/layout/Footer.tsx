"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full px-4 md:px-8 lg:px-12 py-6 bg-white relative overflow-hidden">
      <div className="w-full rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-primary/5 shadow-sm p-6 md:p-8 lg:p-10 relative overflow-hidden">

        {/* Subtle background effects for Option 3 look */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 mb-8 relative z-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-start lg:pr-4">
            <Link href="/" className="relative w-[130px] h-[35px] mb-3">
              <Image
                src="/logo.png"
                alt="EasyMsgSender Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-slate-500 text-sm max-w-[220px] leading-relaxed mb-4">
              Automate your messaging and drive massive growth with our powerful, intuitive platform built for modern enterprises.
            </p>
            {/* New Trust Badge */}
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 text-amber-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              </div>
              <p className="text-xs font-semibold text-slate-700">Loved by 10,000+ businesses</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:pl-6 lg:border-l lg:border-slate-200/60">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-1">Product</h4>
            <Link href="/features" className="text-sm text-slate-500 hover:text-primary transition-colors">Features</Link>
            <Link href="/integrations" className="text-sm text-slate-500 hover:text-primary transition-colors">Integrations</Link>
            <Link href="/pricing" className="text-sm text-slate-500 hover:text-primary transition-colors">Pricing</Link>
          </div>

          <div className="flex flex-col gap-3 lg:pl-6 lg:border-l lg:border-slate-200/60">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-1">Solutions</h4>
            <Link href="/ecommerce" className="text-sm text-slate-500 hover:text-primary transition-colors">E-commerce</Link>
            <Link href="/saas" className="text-sm text-slate-500 hover:text-primary transition-colors">SaaS & Tech</Link>
          </div>

          <div className="flex flex-col gap-3 lg:pl-6 lg:border-l lg:border-slate-200/60">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-1">Company</h4>
            <Link href="#about" className="text-sm text-slate-500 hover:text-primary transition-colors">About Us</Link>
            <Link href="#contact" className="text-sm text-slate-500 hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-3 lg:pl-6 lg:border-l lg:border-slate-200/60">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-1">Legal</h4>
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-primary transition-colors">Terms of Service</Link>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pl-6 lg:border-l lg:border-slate-200/60">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-2">Stay Updated</h4>
            <p className="text-sm text-slate-500 mb-3 leading-relaxed">
              Get the latest updates and marketing tips sent directly to your inbox.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm w-full"
              />
              <div className="flex items-center gap-2 mt-1">
                <button
                  type="submit"
                  className="bg-slate-900 text-white font-bold text-sm rounded-lg px-4 py-2 hover:bg-slate-800 transition-all shadow-sm active:scale-95 flex-1"
                >
                  Subscribe
                </button>
                <div className="flex gap-2 shrink-0">
                  <a href="#" className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm">
                    <span className="sr-only">Twitter</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-secondary hover:border-secondary hover:text-white transition-all shadow-sm">
                    <span className="sr-only">LinkedIn</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 text-center">We respect your privacy. No spam.</p>
            </form>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} EasyMsgSender. Design & Developed by OptiMatrix
          </p>
          <div className="flex items-center gap-6">
            <Link href="#status" className="flex items-center gap-2 text-xs text-slate-500 hover:text-secondary transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              All systems operational
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
