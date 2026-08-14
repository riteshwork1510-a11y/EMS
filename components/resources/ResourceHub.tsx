"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, BookOpen, Video, FileText, ChevronRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { AnimationWrapper } from "@/components/common/AnimationWrapper";
import { cn } from "@/lib/utils";

// Mock Data for Resources
const CATEGORIES = ["All", "Guides", "Case Studies", "Webinars"];

const MOCK_RESOURCES = [
  {
    id: 1,
    title: "10 WhatsApp Marketing Strategies for 2024",
    description: "Discover the top strategies enterprise companies use to boost engagement by 300% using WhatsApp Business.",
    category: "Guides",
    readTime: "5 min read",
    icon: BookOpen,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 2,
    title: "How TechCorp Scaled Support to 1M+ Users",
    description: "A deep dive into how TechCorp utilized our platform to automate 80% of their customer support queries.",
    category: "Case Studies",
    readTime: "8 min read",
    icon: FileText,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: 3,
    title: "Mastering WhatsApp Automation Workflows",
    description: "Join our lead product manager in this exclusive webinar to learn how to build complex chat flows without coding.",
    category: "Webinars",
    readTime: "45 min watch",
    icon: Video,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    id: 4,
    title: "The Ultimate Guide to Meta Business Verification",
    description: "Step-by-step instructions on getting your business verified by Meta to unlock the full potential of WhatsApp API.",
    category: "Guides",
    readTime: "12 min read",
    icon: BookOpen,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 5,
    title: "E-Commerce Success with Broadcast Campaigns",
    description: "Learn how RetailGiant achieved a 45x ROI during Black Friday using our targeted broadcast feature.",
    category: "Case Studies",
    readTime: "6 min read",
    icon: FileText,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: 6,
    title: "Product Update: AI-Powered Responses",
    description: "Everything you need to know about our newest feature release and how to train your AI agent.",
    category: "Webinars",
    readTime: "30 min watch",
    icon: Video,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export function ResourceHub() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = MOCK_RESOURCES.filter((resource) => {
    const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Section className="pt-6 md:pt-10 pb-24 md:pb-32 relative overflow-hidden bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <AnimationWrapper animation="slideUp" delay={0.1}>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/10 border border-primary/20 mb-4">
              Knowledge Base
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-3xl">
              Marketing <span className="text-primary">Resources</span> & Guides
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Explore our collection of expert insights, success stories, and tutorials to help you scale your business.
            </p>
          </AnimationWrapper>

          {/* Search Bar */}
          <AnimationWrapper animation="slideUp" delay={0.2} className="w-full max-w-2xl mt-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search for articles, guides, or webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm text-lg"
              />
            </div>
          </AnimationWrapper>

          {/* Category Filters */}
          <AnimationWrapper animation="slideUp" delay={0.3} className="flex flex-wrap justify-center gap-2 mt-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                  activeCategory === category 
                    ? "text-primary" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                )}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="resource-active-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full border border-primary/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </AnimationWrapper>
        </div>

        {/* Resources Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={resource.id}
                  className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-500 cursor-pointer"
                >
                  {/* Card Header Pattern */}
                  <div className={cn("h-32 relative overflow-hidden flex items-center justify-center", resource.bg)}>
                    <Icon className={cn("w-12 h-12 opacity-50 group-hover:scale-110 transition-transform duration-500", resource.color)} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="flex flex-col flex-grow p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className={cn("text-xs font-bold uppercase tracking-wider", resource.color)}>
                        {resource.category}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {resource.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed flex-grow">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-400">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No resources found</h3>
            <p className="text-slate-500 max-w-sm">
              We couldn't find any resources matching your search for "{searchQuery}".
            </p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-6 text-primary font-semibold hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}

      </div>
    </Section>
  );
}
