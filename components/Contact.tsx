"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate real API submission latency
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-zinc-900/40 border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            <Mail className="h-3 w-3" />
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's Collaborate
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg">
            Ready to build something amazing? Send me a message, or reach out directly at my active platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Contact Cards Info Panel */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-6 sm:p-8 bg-zinc-950/60 border border-zinc-900 rounded-2xl flex flex-col justify-between h-full space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-white">Direct Channels</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Have a freelancing contract, permanent job opening, or academic collaboration project? Drop an email or contact via social networks.
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-4">
                <a
                  href="mailto:anaraskar356@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-900/60 hover:border-zinc-800 transition-colors"
                >
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-black block">Email Address</span>
                    <span className="text-sm font-semibold text-zinc-300">anaraskar356@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/anar-saeed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/40 border border-zinc-900/60 hover:border-zinc-800 transition-colors"
                >
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-lg">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase font-black block">LinkedIn Message</span>
                    <span className="text-sm font-semibold text-zinc-300">Anar Askar Saeed</span>
                  </div>
                </a>
              </div>

              {/* Note */}
              <div className="text-xs text-zinc-500">
                🚀 Standard response timeline: Under 24 hours.
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="col-span-1 lg:col-span-7">
            <div className="p-6 sm:p-8 bg-zinc-900/30 border border-zinc-900 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Anar Askar"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500 text-sm font-medium text-white px-4 py-3.5 rounded-xl transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anaraskar356@gmail.com"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500 text-sm font-medium text-white px-4 py-3.5 rounded-xl transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Message Details</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Anar, I viewed your portfolio and React Native app. We have a development contract..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500 text-sm font-medium text-white px-4 py-3.5 rounded-xl transition-all outline-none resize-none"
                  />
                </div>

                {/* Submit button / Status messages */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={status === "sending" || status === "success"}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
                  >
                    <span>{status === "sending" ? "Submitting Message..." : "Transmit Message"}</span>
                    <Send className="h-4 w-4" />
                  </button>

                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm"
                      >
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Message transmitted successfully! Thank you.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
