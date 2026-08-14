"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Zap, CreditCard, Library, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Features", href: "/features", icon: Zap },
  { name: "Pricing", href: "/pricing", icon: CreditCard },
  { name: "Resources", href: "/resources", icon: Library },
  { name: "Contact", href: "/contact", icon: MessageCircle },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme state mockup

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center w-full pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto w-full h-16 lg:h-20 flex items-center justify-between px-4 lg:px-8 xl:px-12 transition-all duration-500 ease-in-out border-b border-slate-200/50 bg-white/70 backdrop-blur-xl shadow-[0_4px_30px_rgb(0,0,0,0.03)]",
          isScrolled ? "shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white/95" : ""
        )}
      >

        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-10 shrink-0">
          <div className="relative flex items-center h-[42px] sm:h-[48px] lg:h-[56px] w-[180px] lg:w-[220px] transition-all duration-300 group-hover:opacity-90">
            <Image
              src="/logo.png"
              alt="EasyMsgSender Logo"
              fill
              priority
              sizes="(max-width: 768px) 180px, 220px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* CENTER: Desktop Nav */}
        <nav className="hidden md:flex items-center h-12 bg-white rounded-lg border-2 border-primary shadow-sm px-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-2 px-4 h-full text-sm font-medium transition-colors duration-200",
                  isActive ? "text-primary" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/50 rounded-md my-1"
                )}
              >
                <Icon className={cn("w-4 h-4")} />
                <span className="tracking-wide">{link.name}</span>

                {/* Active Bottom Line */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-line"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Actions */}
        <div className="hidden md:flex items-center gap-3 shrink-0">

          <Link
            href="https://wa.me/+918128361116?text=Hello%20EasyMsgSender%20team!%20I%20would%20like%20to%20book%20a%20quick%20demo%20to%20see%20how%20your%20WhatsApp%20API%20platform%20works."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-full text-slate-700 active:scale-95 transition-transform"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* MOBILE Slide-over Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] pointer-events-auto md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[400px] bg-white z-[70] p-6 flex flex-col shadow-2xl pointer-events-auto md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="relative w-[120px] h-[36px]">
                  <Image src="/logo.png" alt="EasyMsgSender" fill className="object-contain object-left" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-full text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-4 px-4 py-4 rounded-2xl transition-colors font-bold text-lg",
                          isActive ? "bg-primary/5 text-primary" : "text-slate-700 hover:bg-slate-50"
                        )}
                      >
                        <Icon className={cn("w-6 h-6", isActive ? "text-primary" : "text-slate-400")} />
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  href="https://wa.me/911234567890?text=Hello%20EasyMsgSender%20team!%20I%20would%20like%20to%20book%20a%20quick%20demo%20to%20see%20how%20your%20WhatsApp%20API%20platform%20works."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 flex justify-center text-slate-700 bg-white border border-slate-200 rounded-xl font-bold active:bg-slate-50 transition-colors"
                >
                  Book Demo
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
