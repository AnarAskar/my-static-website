"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Cpu, 
  Layers, 
  Terminal, 
  Flame, 
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
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "JavaScript / ES6+", level: 92 },
        { name: "HTML5 / Semantic CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap CSS", level: 85 },
      ],
    },
    {
      title: "Languages & Core Systems",
      icon: Terminal,
      color: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
      skills: [
        { name: "Java (OOP)", level: 80 },
        { name: "Python", level: 82 },
        { name: "TypeScript", level: 85 },
        { name: "SQL & Relational DBs", level: 78 },
      ],
    },
    {
      title: "Design & Infrastructure",
      icon: Layers,
      color: "text-violet-400 border-violet-500/20 bg-violet-500/10",
      skills: [
        { name: "Figma (UI/UX Design)", level: 88 },
        { name: "Git & Version Control", level: 90 },
        { name: "Expo CLI (Mobile)", level: 85 },
        { name: "Responsive Wireframing", level: 90 },
      ],
    },
  ];

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
          <p className="text-zinc-400 text-sm sm:text-lg">
            A comprehensive breakdown of my engineering core strengths, languages, libraries, and layout tools that I leverage daily.
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
                className="bg-zinc-900/40 border border-zinc-900 rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:border-zinc-800 transition-all duration-300 shadow-xl shadow-black/20"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3.5 mb-8">
                  <div className={`p-2.5 rounded-xl border ${cat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black text-white tracking-tight">{cat.title}</h3>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-6">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-semibold text-zinc-300">
                        <span>{skill.name}</span>
                        <span className="text-zinc-500 text-xs font-mono">{skill.level}%</span>
                      </div>
                      
                      {/* Custom Modern Progress Track */}
                      <div className="h-1.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            catIdx === 0 
                              ? "from-emerald-500 to-teal-400" 
                              : catIdx === 1 
                              ? "from-indigo-500 to-blue-400" 
                              : "from-violet-500 to-fuchsia-400"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
