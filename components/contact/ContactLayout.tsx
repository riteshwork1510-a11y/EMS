"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";

export function ContactLayout() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for frontend-only constraints
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <Section className="pt-6 md:pt-10 pb-24 md:pb-32 relative overflow-hidden bg-white min-h-[90vh]">

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Contact Information */}
          <div className="flex flex-col space-y-12">
            <AnimationWrapper animation="slideUp" delay={0.1}>
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/20">
                  Connect with us
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                  Let's build something <span className="text-primary">incredible.</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                  Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slideUp" delay={0.2}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Website</h3>
                    <p className="text-slate-500 mb-1">Discover more about our solutions.</p>
                    <a href="https://www.optiinfo.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                      www.optiinfo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Call us</h3>
                    <p className="text-slate-500 mb-1">Mon-Fri from 9am to 6pm.</p>
                    <a href="tel:+918128361116" className="text-primary font-semibold hover:underline">
                      +91 81283 61116
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Visit us</h3>
                    <p className="text-slate-500 mb-1">Opti Matrix Solutions HQ.</p>
                    <p className="text-slate-900 font-medium leading-relaxed max-w-sm">
                      706, Indraprastha Corporate, Corporate Rd, opp. Shell Petrol Pump, Chinar Bungalows, Prahlad Nagar, Ahmedabad, Gujarat 380015
                    </p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* Right Column: Contact Form */}
          <AnimationWrapper animation="scale" delay={0.3} className="relative w-full max-w-xl mx-auto lg:ml-auto">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          required
                          placeholder="Rahul"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          required
                          placeholder="Sharma"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        placeholder="rahul@company.in"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        placeholder="Opti Matrix Solutions"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                      <textarea 
                        id="message" 
                        required
                        rows={4}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-base rounded-xl px-6 py-4 mt-2 hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                    
                    <p className="text-xs text-slate-500 text-center mt-4">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-6"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 mb-8 max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-primary font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimationWrapper>

        </div>
      </div>
    </Section>
  );
}
