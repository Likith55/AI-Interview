"use client";

import { useState } from "react";
import axios from "axios";

export default function InterviewPage() {
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateInterview() {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/interview/generate",
        {
          role: "Frontend Developer",
          level: "Intermediate",
        }
      );

      setQuestions(response.data.questions);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold">
        AI Mock Interview
      </h1>

      <button
        onClick={generateInterview}
        className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600"
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>

      <div className="mt-10 whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-8">
        {questions}
      </div>
    </main>
  );
}