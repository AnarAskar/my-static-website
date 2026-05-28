"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, BookOpen, Compass, Users } from "lucide-react";

export default function ProjectsList() {
  const projects = [
    {
      title: "freeCodeCamp International Cohort Project",
      role: "Project Team Lead",
      description:
        "Spearheaded and guided an international team of developers to design and deploy a collaborative full-stack application. Developed a responsive, user-friendly React frontend and a robust Django REST Framework backend complete with secure JWT-based authorization and customized relational database queries.",
      repo: "https://github.com/nhcarrigan-spring-2026-cohort/amber-wisteria", // User can replace with actual repo if desired
      tech: [
        "React.js",
        "Django REST Framework",
        "Python 3.12",
        "JWT Auth",
        "Team Leadership",
        "Docker",
      ],
      icon: Users,
      gradient: "from-emerald-600 to-indigo-600",
    },
    {
      title: "Event Management System",
      role: "Full Stack Developer",
      description:
        "An interactive web platform designed to streamline event organizing, ticketing, and scheduling on a university campus. Features dynamic student registrations, administrative role-based controls, and easy-to-use booking feedback loops.",
      repo: "https://github.com/peshang72/Event-Management-System",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "Event Booking Flow",
      ],
      icon: Calendar,
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      title: "University Blog Website",
      role: "Frontend Developer",
      description:
        "A centralized, interactive publication and writing hub built for campus news, stories, and academic peer engagement. Supports responsive masonry layouts, categorization, and rich media blog integrations.",
      repo: "https://github.com/peshang72/UKH-Blog-Website",
      tech: ["HTML5", "CSS3", "JavaScript", "UI/UX Design", "Static Web Hub"],
      icon: BookOpen,
      gradient: "from-purple-600 to-indigo-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-zinc-900/30 relative border-b border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            <Compass className="h-3 w-3" />
            More Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineering Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg font-normal leading-relaxed">
            A deeper look at full-stack, independent, and collaborative systems
            engineered to solve real-world workflows and enrich digital
            workspaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group flex flex-col bg-zinc-900/55 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
              >
                {/* Visual Top Panel */}
                <div
                  className={`h-48 bg-gradient-to-br ${proj.gradient} p-8 flex items-end relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-zinc-950/20 mix-blend-overlay" />
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-white/10 blur-2xl group-hover:scale-110 transition-transform duration-500" />

                  {/* Icon Panel */}
                  <div className="p-4 bg-zinc-950/40 backdrop-blur-md rounded-2xl border border-white/10 text-white relative z-10 shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-widest font-black text-indigo-400 block">
                      {proj.role}
                    </span>
                    <h3 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal line-clamp-4">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 bg-zinc-950 border border-zinc-800 rounded text-[11px] font-semibold text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-400 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Repo Link */}
                  <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-indigo-400 transition-colors uppercase tracking-wider"
                    >
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                        />
                      </svg>
                      <span>Code Repository</span>
                    </a>

                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-500 hover:text-white hover:border-zinc-700 transition-all duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
