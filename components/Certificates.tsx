"use client";

import { motion } from "framer-motion";
import { FileBadge, Award, ShieldCheck, ExternalLink, Calendar } from "lucide-react";

export default function Certificates() {
  const credentials = [
    {
      title: "Meta Front-End Developer Professional",
      issuer: "Meta (via Coursera)",
      date: "Dec 2025",
      id: "META-FED-990",
      skills: ["React", "JavaScript", "UX UI", "API Integration"],
      color: "border-indigo-500/10 hover:border-indigo-500/30 bg-indigo-500/5",
      badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "React Native & Expo Advanced Guide",
      issuer: "Udemy Academic",
      date: "Oct 2025",
      id: "UD-RN-883",
      skills: ["Expo SDK", "NativeWind", "React Navigation"],
      color: "border-violet-500/10 hover:border-violet-500/30 bg-violet-500/5",
      badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Aug 2025",
      id: "AWS-CCP-219",
      skills: ["Cloud Architecture", "S3", "Lambda", "IAM Security"],
      color: "border-amber-500/10 hover:border-amber-500/30 bg-amber-500/5",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section id="credentials" className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
            <Award className="h-3 w-3" />
            Accreditation
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Credentials & Certifications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg">
            Professional qualifications and specialized course achievements verified by global technology networks.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {credentials.map((cred, idx) => (
            <motion.div
              key={cred.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:shadow-black/40 ${cred.color}`}
            >
              {/* Top Accent Icon & Date */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl border ${cred.badgeColor}`}>
                  <FileBadge className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-semibold bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                  <Calendar className="h-3 w-3" />
                  <span>{cred.date}</span>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-3 mb-6">
                <span className="text-[10px] uppercase tracking-widest font-black text-zinc-500 block">
                  {cred.issuer}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
                  {cred.title}
                </h3>
                <p className="text-[11px] font-mono font-bold text-zinc-600">
                  License: {cred.id}
                </p>
              </div>

              {/* Skills covered */}
              <div className="flex flex-wrap gap-1 border-t border-zinc-900 pt-4 mt-auto">
                {cred.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 bg-zinc-900 text-[10px] font-semibold text-zinc-400 rounded-md border border-zinc-800/60"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Interactive background accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/1 rounded-full blur-xl group-hover:bg-indigo-500/5 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
