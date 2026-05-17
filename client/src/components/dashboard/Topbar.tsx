"use client";

export default function Topbar() {
  return (
    <div className="h-20 border-b border-white/10 backdrop-blur-xl bg-black/30 flex items-center justify-between px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-400 text-sm">
          Welcome back
        </p>
      </div>

      <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300">
        Start Interview
      </button>
    </div>
  );
}