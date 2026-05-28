"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Download, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32 bg-zinc-950">
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="col-span-1 lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <ShieldCheck className="h-4 w-4 text-indigo-400" />
              <span>Available for Freelance & Full-time Roles</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400 text-transparent bg-clip-text">
                  Anar Askar
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-2xl font-bold text-zinc-300"
              >
                Full Stack & Mobile Developer
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
              >
                I am a dedicated software engineer specializing in building high-fidelity web platforms and mobile applications using <span className="text-white font-semibold">React Native Expo</span>, <span className="text-white font-semibold">Next.js</span>, and modern tech stacks. I thrive on translating elegant designs into pixel-perfect, highly optimized, and responsive user experiences.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#featured-app"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-lg shadow-indigo-600/25 transition-all duration-200 active:scale-95 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold rounded-full transition-all duration-200 active:scale-95"
              >
                <Mail className="h-5 w-5" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start space-x-6 pt-4 border-t border-zinc-900"
            >
              {/* GitHub Custom SVG */}
              <a
                href="https://github.com/peshang72"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              {/* LinkedIn Custom SVG */}
              <a
                href="https://www.linkedin.com/in/anar-saeed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Mail */}
              <a
                href="mailto:anaraskar356@gmail.com"
                className="text-zinc-500 hover:text-white transition-colors duration-200"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </div>

          {/* Hero Right Graphic / Personal Photo Placeholder */}
          <div className="col-span-1 lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Spinning gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-500 to-fuchsia-500 animate-[spin_8s_linear_infinite] opacity-70 blur-xs" />
              
              {/* Inner Circle Image Container */}
              <div className="absolute inset-1.5 rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden border-2 border-zinc-900">
                {/* Simulated professional tech avatar or avatar graphic */}
                <div className="text-center p-8">
                  <span className="block text-5xl sm:text-6xl mb-4">🚀</span>
                  <div className="font-extrabold text-white text-xl tracking-wider uppercase">Anar Askar</div>
                  <div className="text-zinc-400 text-xs mt-1">Mobile & Web Engineer</div>
                </div>
              </div>

              {/* Decorative mini badges */}
              <div className="absolute -top-4 -left-4 p-3 bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-lg flex items-center gap-2">
                <span className="text-xl">📱</span>
                <span className="text-xs font-bold text-white">React Native</span>
              </div>
              <div className="absolute -bottom-4 -right-4 p-3 bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-lg flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span className="text-xs font-bold text-white">Next.js v15</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
