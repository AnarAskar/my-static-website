"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Cpu, 
  Layers, 
  Terminal, 
  Monitor, 
  GitBranch, 
  Laptop, 
  Shield 
} from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-500/15",
      skills: [
        "React.js",
        "Next.js v15",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "Bootstrap CSS",
      ],
    },
    {
      title: "Languages & Core Systems",
      icon: Terminal,
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10 hover:border-indigo-500/40 hover:bg-indigo-500/15",
      skills: [
        "Java (OOP)",
        "Python",
        "SQL & Databases",
        "Software Architecture",
        "C++ Foundations",
        "Data Structures",
      ],
    },
    {
      title: "Design & Infrastructure",
      icon: Layers,
      color: "text-violet-400 border-violet-500/20 bg-violet-500/10 hover:border-violet-500/40 hover:bg-violet-500/15",
      skills: [
        "Expo CLI (Mobile)",
        "React Native",
        "Figma (UI/UX Prototyping)",
        "Git & Version Control",
        "Responsive Wireframing",
        "Local Persistence (AsyncStorage)",
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <Cpu className="h-3 w-3" />
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technical Skillset
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg font-normal leading-relaxed">
            A comprehensive overview of my tech stack, languages, and frameworks. Instead of arbitrary percentage metrics, these are the tools I confidently leverage to build reliable systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                className="bg-zinc-900/30 border border-zinc-900/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:border-zinc-800 transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3.5 mb-6">
                    <div className={`p-2.5 rounded-xl border transition-all duration-300 ${cat.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-black text-white tracking-tight">{cat.title}</h3>
                  </div>

                  {/* Skills Grid/Cloud */}
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2.5"
                  >
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3.5 py-2 bg-zinc-950/60 border border-zinc-900/80 rounded-xl text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white hover:border-zinc-700/60 hover:bg-zinc-900/40 transition-all duration-200 shadow-sm cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
