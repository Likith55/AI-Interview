"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            InterviewAI
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}