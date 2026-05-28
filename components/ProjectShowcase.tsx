"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, 
  Sparkles, 
  Calendar, 
  QrCode, 
  MapPin, 
  MessageSquare, 
  Wifi, 
  Battery, 
  ArrowUpRight, 
  Layers, 
  Terminal,
  Activity
} from "lucide-react";

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "schedule" | "events" | "social">("dashboard");

  const appScreens = {
    dashboard: {
      title: "Dashboard Overview",
      subtitle: "Personalized student feed",
      component: (
        <div className="flex flex-col h-full bg-zinc-950 text-white p-4 justify-between">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <div>
                <p className="text-zinc-500 text-[10px] uppercase font-bold">Welcome Back</p>
                <h4 className="font-extrabold text-sm text-indigo-400">Anar Askar</h4>
              </div>
              <span className="text-xl">🎓</span>
            </div>

            {/* Student ID Card */}
            <div className="bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800 rounded-xl p-3.5 shadow-lg shadow-indigo-900/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl" />
              <p className="text-[9px] uppercase tracking-widest text-indigo-200">University Student Card</p>
              <h5 className="font-black text-xs mt-2 tracking-wide">UKH - Software Engineering</h5>
              <div className="flex justify-between items-end mt-4">
                <p className="text-[10px] text-indigo-200">ID: #4059-A</p>
                <span className="bg-white/20 text-[9px] px-2 py-0.5 rounded-full font-bold">Active</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg text-center">
                <span className="text-[10px] text-zinc-400 block">Current GPA</span>
                <span className="text-sm font-bold text-emerald-400">3.87</span>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg text-center">
                <span className="text-[10px] text-zinc-400 block">Next Class</span>
                <span className="text-sm font-bold text-indigo-300">10:30 AM</span>
              </div>
            </div>

            {/* Tasks / Notices */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-zinc-400 font-bold">Today's Reminders</span>
                <span className="text-indigo-400">View All</span>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-900 rounded-lg p-2 flex items-center gap-2">
                <span className="text-amber-500 text-xs">⚠️</span>
                <div>
                  <p className="text-[10px] font-bold text-zinc-200">AI Project Submission</p>
                  <p className="text-[8px] text-zinc-500">Due in 4 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Tab Bar inside the app */}
          <div className="border-t border-zinc-900 pt-2 flex justify-around text-zinc-600 text-[10px]">
            <span className="text-indigo-400">●</span>
            <span>○</span>
            <span>○</span>
            <span>○</span>
          </div>
        </div>
      ),
    },
    schedule: {
      title: "Class Schedule",
      subtitle: "Dynamic visual timetable",
      component: (
        <div className="flex flex-col h-full bg-zinc-950 text-white p-4 justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <h4 className="font-extrabold text-sm text-indigo-400">Timetable</h4>
              <span className="text-xs bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">Today</span>
            </div>

            <div className="space-y-3">
              {/* Slot 1 */}
              <div className="flex gap-3">
                <div className="text-right w-10 py-1 border-r border-indigo-500/30 pr-2">
                  <p className="text-[10px] font-bold text-zinc-200">09:00</p>
                  <p className="text-[8px] text-zinc-500">10:30</p>
                </div>
                <div className="bg-indigo-950/40 border border-indigo-900/60 rounded-lg p-2 flex-1">
                  <h5 className="text-[10px] font-bold text-indigo-300">Software Architecture</h5>
                  <p className="text-[8px] text-zinc-400">Room 302 • Dr. Peshang</p>
                </div>
              </div>

              {/* Slot 2 */}
              <div className="flex gap-3">
                <div className="text-right w-10 py-1 border-r border-zinc-900 pr-2">
                  <p className="text-[10px] font-bold text-zinc-400">11:00</p>
                  <p className="text-[8px] text-zinc-600">12:30</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800/80 rounded-lg p-2 flex-1">
                  <h5 className="text-[10px] font-bold text-zinc-300">Advanced Database Systems</h5>
                  <p className="text-[8px] text-zinc-500">Lab 4 • Prof. Alan</p>
                </div>
              </div>

              {/* Slot 3 */}
              <div className="flex gap-3">
                <div className="text-right w-10 py-1 border-r border-zinc-900 pr-2">
                  <p className="text-[10px] font-bold text-zinc-500">14:00</p>
                  <p className="text-[8px] text-zinc-600">15:30</p>
                </div>
                <div className="bg-violet-950/40 border border-violet-900/60 rounded-lg p-2 flex-1">
                  <h5 className="text-[10px] font-bold text-violet-300">Mobile Development</h5>
                  <p className="text-[8px] text-zinc-400">Room 101 • Seminar Hall</p>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Tab Bar inside the app */}
          <div className="border-t border-zinc-900 pt-2 flex justify-around text-zinc-600 text-[10px]">
            <span>○</span>
            <span className="text-indigo-400">●</span>
            <span>○</span>
            <span>○</span>
          </div>
        </div>
      ),
    },
    events: {
      title: "Campus Events",
      subtitle: "QR ticketing & scanners",
      component: (
        <div className="flex flex-col h-full bg-zinc-950 text-white p-4 justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <h4 className="font-extrabold text-sm text-indigo-400">My Tickets</h4>
              <QrCode className="h-4 w-4 text-indigo-400 animate-pulse" />
            </div>

            {/* Event ticket detail */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[8px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">University Expo 2026</span>
                  <h5 className="text-[10px] font-bold text-zinc-200 mt-1">Tech Hackathon & Demo Day</h5>
                </div>
                <span className="text-xs">🏆</span>
              </div>

              {/* QR Code Graphic placeholder */}
              <div className="bg-white p-2 rounded-lg flex justify-center items-center w-20 h-20 mx-auto">
                <div className="grid grid-cols-4 gap-0.5 w-full h-full bg-zinc-950" style={{ contentVisibility: "auto" }}>
                  {/* Fake QR blocks */}
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded-xs ${
                        (i % 2 === 0 && i % 3 !== 0) || i === 0 || i === 3 || i === 12 || i === 15 
                          ? "bg-zinc-950" 
                          : "bg-white"
                      }`} 
                    />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="text-[8px] text-zinc-500 uppercase tracking-widest font-semibold">TICKET ID</p>
                <p className="text-[9px] font-mono text-indigo-300 font-bold">UKH-90382-EXPO</p>
              </div>
            </div>
          </div>

          {/* Simulated Tab Bar inside the app */}
          <div className="border-t border-zinc-900 pt-2 flex justify-around text-zinc-600 text-[10px]">
            <span>○</span>
            <span>○</span>
            <span className="text-indigo-400">●</span>
            <span>○</span>
          </div>
        </div>
      ),
    },
    social: {
      title: "Student Forum",
      subtitle: "Collaborative peer feed",
      component: (
        <div className="flex flex-col h-full bg-zinc-950 text-white p-4 justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <h4 className="font-extrabold text-sm text-indigo-400">Discussion Boards</h4>
              <span className="text-xs text-zinc-400">General</span>
            </div>

            {/* Chat Thread */}
            <div className="space-y-3 overflow-y-auto max-h-[170px] pr-1">
              <div className="bg-zinc-900/40 border border-zinc-900/60 p-2.5 rounded-lg space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-indigo-300">@sarah_swe</span>
                  <span className="text-[7px] text-zinc-600">10m ago</span>
                </div>
                <p className="text-[9px] text-zinc-400 leading-normal">
                  "Does anyone have the syllabus for the mobile app design exam next week?"
                </p>
              </div>

              <div className="bg-zinc-900/40 border border-zinc-900/60 p-2.5 rounded-lg space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-indigo-300">@anar_dev</span>
                  <span className="text-[7px] text-zinc-600">5m ago</span>
                </div>
                <p className="text-[9px] text-zinc-400 leading-normal">
                  "I posted the full schedule PDF in our Discord/Slack channel. Let me know if you need the direct drive link!"
                </p>
              </div>
            </div>
          </div>

          {/* Simulated Tab Bar inside the app */}
          <div className="border-t border-zinc-900 pt-2 flex justify-around text-zinc-600 text-[10px]">
            <span>○</span>
            <span>○</span>
            <span>○</span>
            <span className="text-indigo-400">●</span>
          </div>
        </div>
      ),
    },
  };

  return (
    <section id="featured-app" className="py-24 sm:py-32 bg-zinc-900/40 relative border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            <Sparkles className="h-3 w-3" />
            Featured Project
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Latest Expo Mobile App
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg">
            A comprehensive, custom mobile workspace designed as an all-in-one companion app for students, demonstrating reactive styling, local data synchronization, and Expo framework mechanics.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column: Interactive Mobile App Mockup */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center">
            
            {/* The Phone Container */}
            <div className="relative w-72 h-[560px] bg-zinc-900 rounded-[3rem] border-[10px] border-zinc-950 shadow-2xl shadow-black/80 flex flex-col overflow-hidden group">
              
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-950 rounded-b-2xl z-40 flex items-center justify-center">
                {/* Speaker line */}
                <div className="w-12 h-1 bg-zinc-900 rounded-full mb-1" />
                {/* Camera lens */}
                <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full mb-1 ml-2" />
              </div>

              {/* Status Bar inside screen */}
              <div className="h-8 bg-zinc-950 text-[10px] font-bold text-white px-6 flex items-end justify-between z-30 select-none pb-1">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="h-3 w-3 text-zinc-400" />
                  <span className="text-[8px] bg-zinc-800 px-1 py-0.2 rounded font-mono">5G</span>
                  <Battery className="h-3.5 w-3.5 text-zinc-400" />
                </div>
              </div>

              {/* Dynamic Screen View */}
              <div className="flex-1 bg-zinc-950 overflow-hidden relative border-t border-zinc-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="h-full"
                  >
                    {appScreens[activeTab].component}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Home Indicator bar */}
              <div className="h-5 bg-zinc-950 flex items-center justify-center z-30">
                <div className="w-24 h-1 bg-zinc-700 rounded-full" />
              </div>

            </div>

            {/* Quick Screen Switches below Phone */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-sm">
              {(Object.keys(appScreens) as Array<keyof typeof appScreens>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`text-xs px-3 py-1.5 rounded-full font-bold border transition-all duration-200 active:scale-95 ${
                    activeTab === key
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/20"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Detailed app metadata & text description */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-indigo-400 font-extrabold tracking-widest text-xs uppercase block">React Native • Expo CLI</span>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                EduSphere University App
              </h3>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                EduSphere solves a key challenge on campus: centralizing fragmented student resources. This application aggregates timetables, news feeds, digital student IDs, and discussion forums into a rapid, lightweight client built using <span className="text-white font-semibold">Expo SDK</span>. It runs with complete cross-platform fidelity on both Android and iOS devices.
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {["React Native", "Expo SDK", "TypeScript", "NativeWind", "Zustand State", "Supabase", "Expo Go"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-zinc-800 border border-zinc-700/50 rounded-md text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Interactive Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-900">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Dynamic Schedule Tracking</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Automated sorting of classes by nearest time slots.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400">
                  <QrCode className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Digital QR Tickets</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Instant check-ins for events on campus using custom QR generators.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Collaborative Chats</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Student discussion boards for peer study group links.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-indigo-400">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Fast Offline Sync</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">Client-side persistence guarantees schedule availability offline.</p>
                </div>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/peshang72"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest"
                aria-label="View Code Repository on GitHub"
              >
                <span>View Repository</span>
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
              >
                <span>Request Custom Demo</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
