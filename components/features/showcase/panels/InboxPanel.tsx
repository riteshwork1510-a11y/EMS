"use client";

import { motion } from "framer-motion";
import { Search, Phone, Video, MoreVertical, CheckCheck, Smile, Paperclip, Mic } from "lucide-react";

const chats = [
  { id: 1, name: "Rahul Sharma", msg: "When will my order arrive?", time: "10:42 AM", unread: 2, avatar: "R" },
  { id: 2, name: "Priya Patel", msg: "Thanks for the discount code!", time: "9:15 AM", unread: 0, avatar: "P" },
  { id: 3, name: "Tech Support", msg: "Let me check that for you right away.", time: "Yesterday", unread: 0, avatar: "T" },
  { id: 4, name: "Amit Kumar", msg: "Yes, I would like to upgrade my plan.", time: "Tuesday", unread: 1, avatar: "A" }
];

export function InboxPanel() {
  return (
    <div className="flex h-full bg-background/50 border-x border-border/50">
      {/* Left Chat List */}
      <div className="w-72 border-r border-border/50 flex flex-col bg-card">
        <div className="p-4 border-b border-border/50 bg-muted/20">
          <h2 className="font-bold text-lg mb-4">Shared Inbox</h2>
          <div className="bg-background border border-border/50 rounded-lg flex items-center px-3 py-2 shadow-sm">
            <Search className="w-4 h-4 text-muted-foreground mr-2" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full bg-transparent border-none focus:outline-none text-sm"
              disabled
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat, i) => (
            <div key={chat.id} className={`p-4 border-b border-border/10 cursor-pointer transition-colors flex gap-3 ${i === 0 ? 'bg-muted/50' : 'hover:bg-muted/30'}`}>
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                {chat.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-sm truncate">{chat.name}</h3>
                  <span className={`text-xs ${chat.unread > 0 ? 'text-primary font-bold' : 'text-muted-foreground'}`}>{chat.time}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-xs text-muted-foreground truncate">{chat.msg}</p>
                  {chat.unread > 0 && (
                    <span className="w-4 h-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-[10px] font-bold">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Window */}
      <div className="flex-1 flex flex-col relative bg-[url('https://i.pinimg.com/originals/8f/ba/cb/8fbacbd464e996966eb9d4a6b7a9c21e.jpg')] bg-cover">
        <div className="absolute inset-0 bg-background/90 z-0" />

        {/* Header */}
        <div className="p-4 bg-card border-b border-border/50 flex justify-between items-center z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">R</div>
            <div>
              <h3 className="font-bold text-sm">Rahul Sharma</h3>
              <p className="text-xs text-emerald-500 font-medium">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Video className="w-5 h-5 hover:text-foreground cursor-pointer" />
            <Phone className="w-4 h-4 hover:text-foreground cursor-pointer" />
            <MoreVertical className="w-5 h-5 hover:text-foreground cursor-pointer" />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-6 flex flex-col gap-4 z-10 overflow-y-auto">
          <div className="flex justify-center">
            <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-md shadow-sm">Today</span>
          </div>

          <div className="flex justify-end">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-primary text-primary-foreground p-3 rounded-xl rounded-tr-sm max-w-[70%] shadow-sm text-sm">
              Hi Rahul, your recent order #8492 is currently being processed.
              <div className="flex justify-end items-center gap-1 mt-1 opacity-70">
                <span className="text-[10px]">10:30 AM</span>
                <CheckCheck className="w-3 h-3" />
              </div>
            </motion.div>
          </div>

          <div className="flex justify-start">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card border border-border/50 text-foreground p-3 rounded-xl rounded-tl-sm max-w-[70%] shadow-sm text-sm">
              When will my order arrive?
              <div className="flex justify-end items-center gap-1 mt-1 text-muted-foreground">
                <span className="text-[10px]">10:42 AM</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-card border-t border-border/50 z-10 flex items-center gap-3">
          <Smile className="w-6 h-6 text-muted-foreground hover:text-foreground cursor-pointer" />
          <Paperclip className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
          <div className="flex-1 bg-muted/50 rounded-lg px-4 py-2 border border-border/50 text-sm text-muted-foreground">
            Type a message...
          </div>
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:opacity-90 transition-opacity">
            <Mic className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
