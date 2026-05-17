"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Interviews",
    value: "24",
  },
  {
    title: "ATS Score",
    value: "92%",
  },
  {
    title: "Coding Score",
    value: "88%",
  },
  {
    title: "Problems Solved",
    value: "340",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <p className="text-gray-400">
            {stat.title}
          </p>

          <h2 className="text-4xl font-bold mt-4">
            {stat.value}
          </h2>
        </motion.div>
      ))}
    </div>
  );
}