"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  Zap,
  Clock,
  ShoppingBag,
  ArrowUpRight,
  Play,
  Wifi,
  Battery,
} from "lucide-react";

export default function ProjectShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);

  // Dynamic basePath handling for HTML video source path (essential for GitHub Pages)
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/my-static-website" : "";
  const videoSrc = `${basePath}/videos/yourpath-demo.mp4`;

  const features = [
    {
      icon: Sparkles,
      title: "AI-Generated Roadmaps",
      description:
        "Create and dynamically refine custom step-by-step learning roadmaps tailored specifically to your speed and goals.",
    },
    {
      icon: Layers,
      title: "Milestones & Tasks",
      description:
        "Roadmaps are divided into milestones. Click any milestone to reveal structured, actionable nested checklists.",
    },
    {
      icon: Zap,
      title: "Daily Streak Engine",
      description:
        "Maintain consistency. Complete at least one task per day to advance your streak multiplier and grow your overall progress bar.",
    },
    {
      icon: Clock,
      title: "Integrated Pomodoro",
      description:
        "Boost your productivity. Utilize built-in Pomodoro timers directly inside your tasks to automatically reward your streak count.",
    },
    {
      icon: ShoppingBag,
      title: "Streak Freeze Store",
      description:
        "Protect your hard work. Spend accumulated reward points to buy Streak Freezes from the in-app economy shop.",
    },
  ];

  return (
    <section
      id="featured-app"
      className="py-24 sm:py-32 bg-zinc-900/30 relative border-y border-zinc-900/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            <Sparkles className="h-3 w-3" />
            Latest Masterpiece
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Meet YourPath Mobile App
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg font-normal leading-relaxed">
            An AI-powered roadmap planner built with **React Native & Expo CLI**
            designed to gamify learning, keep you consistent, and map your
            educational journeys.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left Column: Phone Mockup showcasing the actual video demo */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center">
            <div className="relative w-72 h-[560px] bg-zinc-900 rounded-[3rem] border-[10px] border-zinc-950 shadow-2xl shadow-black/90 flex flex-col overflow-hidden group">
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-950 rounded-b-2xl z-40 flex items-center justify-center">
                <div className="w-12 h-1 bg-zinc-900 rounded-full mb-1" />
                <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full mb-1 ml-2" />
              </div>

              {/* Status Bar */}
              <div className="h-8 bg-zinc-950 text-[10px] font-bold text-white px-6 flex items-end justify-between z-30 select-none pb-1">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="h-3 w-3 text-zinc-400" />
                  <span className="text-[8px] bg-zinc-800 px-1 py-0.2 rounded font-mono">
                    5G
                  </span>
                  <Battery className="h-3.5 w-3.5 text-zinc-400" />
                </div>
              </div>

              {/* Video Player Display Container */}
              <div className="flex-1 bg-zinc-950 overflow-hidden relative border-t border-zinc-950">
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ background: "#0a0a0a" }}
                />

                {/* Visual Video Status Badge */}
                <div className="absolute bottom-4 left-4 z-30 px-2 py-0.5 bg-black/60 border border-white/10 rounded text-[9px] font-mono tracking-wider text-emerald-400 flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  APP PREVIEW
                </div>
              </div>

              {/* Home Indicator */}
              <div className="h-5 bg-zinc-950 flex items-center justify-center z-30">
                <div className="w-24 h-1 bg-zinc-700 rounded-full" />
              </div>
            </div>

            {/* Hint for local file */}
            <p className="text-[11px] text-zinc-500 font-mono mt-4 text-center max-w-xs">
              Preview loads automatically from <br />
              <span className="text-zinc-400">
                public/videos/yourpath-demo.mp4
              </span>
            </p>
          </div>

          {/* Right Column: Copywriting, features, and links */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-indigo-400 font-extrabold tracking-widest text-xs uppercase block">
                React Native Expo • Django DRF • Google Gemini AI
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                YourPath: Custom AI Roadmaps
              </h3>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
                YourPath takes the confusion out of learning any new skill.
                Simply type a topic, and our integrated Google Gemini AI
                generates structured, step-by-step roadmaps. Built with React
                Native & Expo Router on the frontend, and powered by Django REST
                Framework on the backend, YourPath gamifies your routine using
                streak multipliers, Pomodoro timers, and a point-based economy
                store.
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {[
                "React Native with Expo",
                "expo-router",
                "Zustand State",
                "Django REST Framework",
                "Google Gemini AI",
                "Python 3.12 & DRF",
                "JWT Authentication",
                "SQLite (PythonAnywhere)",
                "Custom Glassmorphic UI",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-4 pt-6 border-t border-zinc-900/80">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
                Core Functionality
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {features.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="flex items-start space-x-3.5"
                    >
                      <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400 shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white leading-snug">
                          {feat.title}
                        </h5>
                        <p className="text-xs text-zinc-500 mt-1 leading-normal font-normal">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-zinc-900/80">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-200"
              >
                <span>Request Custom Build</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              {/* Watch Full Walkthrough Link */}
              <a
                href="https://youtube.com/shorts/A63pLoDk26A?feature=share" // User can replace this with their actual YouTube link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white text-sm font-bold rounded-full transition-all duration-200"
              >
                <Play className="h-4 w-4 text-zinc-400 fill-current" />
                <span>Watch Full Walkthrough</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
