"use client";

import { motion } from "framer-motion";
import { Plus, Search, Filter, MoreHorizontal, UserCheck, Star, Shield } from "lucide-react";

const mockContacts = [
  { id: 1, name: "Aarav Sharma", phone: "+91 98765 43210", tags: ["VIP", "Active"], lastActive: "2 mins ago" },
  { id: 2, name: "Diya Patel", phone: "+91 87654 32109", tags: ["New Lead"], lastActive: "1 hour ago" },
  { id: 3, name: "Vihaan Singh", phone: "+91 76543 21098", tags: ["Customer", "Active"], lastActive: "3 hours ago" },
  { id: 4, name: "Ananya Gupta", phone: "+91 65432 10987", tags: ["Churn Risk"], lastActive: "2 days ago" },
  { id: 5, name: "Kabir Verma", phone: "+91 54321 09876", tags: ["VIP", "Active"], lastActive: "Just now" }
];

export function ContactsPanel() {
  return (
    <div className="flex flex-col h-full bg-background/50">
      <div className="p-6 border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Contact Management</h2>
          <p className="text-sm text-muted-foreground">Manage and segment your audience</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-background border border-border text-foreground text-sm font-medium rounded-lg shadow-sm hover:bg-muted transition-colors">
            Import CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" /> Add Contact
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Search & Filter Bar */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 bg-card border border-border/50 rounded-lg flex items-center px-4 shadow-sm">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by name or phone number..." 
              className="w-full bg-transparent border-none focus:outline-none px-3 py-2 text-sm"
              disabled
            />
          </div>
          <button className="px-4 py-2 bg-card border border-border/50 text-foreground text-sm font-medium rounded-lg shadow-sm hover:bg-muted flex items-center gap-2 transition-colors">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Contacts Table */}
        <div className="bg-card border border-border/50 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/30">
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50 w-10">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50">Name</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50">Phone Number</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50">Tags</th>
                <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockContacts.map((contact, i) => (
                <motion.tr 
                  key={contact.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-muted/20 transition-colors group border-b border-border/50 last:border-0"
                >
                  <td className="px-4 py-3">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {contact.name.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm text-foreground hover:text-primary cursor-pointer hover:underline transition-colors" onClick={() => console.log('Clicked', contact.name)}>{contact.name}</span>
                        <span className="text-[10px] text-muted-foreground">{contact.lastActive}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    <span className="hover:text-primary cursor-pointer hover:underline transition-colors" onClick={() => console.log('Dialing', contact.phone)}>{contact.phone}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      {contact.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-md font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1.5 text-muted-foreground hover:bg-muted rounded-md transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
