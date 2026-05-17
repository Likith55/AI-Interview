"use client";

import Link from "next/link";
import { LayoutDashboard, FileText, Code2, BarChart3 } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Resume Analyzer",
    icon: FileText,
    href: "/resume",
  },
  {
    title: "Coding",
    icon: Code2,
    href: "/coding",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-white/5 backdrop-blur-xl p-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        InterviewAI
      </h1>

      <div className="mt-12 space-y-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Icon size={22} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}