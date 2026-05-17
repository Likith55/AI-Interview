import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <StatsCards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">
              Recent Interviews
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span>Frontend Interview</span>
                <span className="text-cyan-400">92%</span>
              </div>

              <div className="flex items-center justify-between">
                <span>DSA Round</span>
                <span className="text-cyan-400">88%</span>
              </div>

              <div className="flex items-center justify-between">
                <span>System Design</span>
                <span className="text-cyan-400">85%</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-2xl font-bold">
              Weekly Activity
            </h2>

            <div className="mt-6 h-52 flex items-center justify-center text-gray-400">
              Charts Coming Soon
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}