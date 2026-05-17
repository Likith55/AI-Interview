"use client";

import { useEffect, useState } from "react";

export default function InterviewTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(seconds / 60);

  return (
    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
      ⏱ {minutes}:{String(seconds % 60).padStart(2, "0")}
    </div>
  );
}