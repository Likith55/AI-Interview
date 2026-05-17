"use client";

const stats = [
  { label: "Active Users", value: "50K+" },
  { label: "Mock Interviews", value: "1M+" },
  { label: "Success Rate", value: "92%" },
  { label: "Companies", value: "200+" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <h2 className="text-4xl font-bold text-cyan-400">
              {stat.value}
            </h2>

            <p className="text-gray-400 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}