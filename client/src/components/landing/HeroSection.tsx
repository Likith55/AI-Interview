"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_40%)]" />

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Master Your
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            {" "}AI Interviews
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Practice technical interviews with AI-powered mock interviews,
          resume analysis, coding assessments, and real-time feedback.
        </motion.p>
      </div>
    </section>
  );
}