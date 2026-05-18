"use client";

import { useEffect, useState } from "react";

interface Interview {
  id: string;

  role: string;

  transcript: string;

  technicalScore: number;

  communicationScore: number;

  confidenceScore: number;

  overallScore: number;

  strengths: string;

  weaknesses: string;

  suggestions: string;

  finalFeedback: string;

  createdAt: string;
}

export default function DashboardPage() {

  const [interviews, setInterviews] =
    useState<Interview[]>([]);

  useEffect(() => {

    fetchInterviews();

  }, []);

  async function fetchInterviews() {

    try {

      const res = await fetch(
        "http://localhost:5000/api/interview/all"
      );

      const data = await res.json();

      setInterviews(
        data.interviews || []
      );

    } catch (error) {

      console.error(error);
    }
  }

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold mb-10">
        Interview Dashboard
      </h1>

      {interviews.length === 0 ? (

        <p className="text-gray-400">
          No interviews found.
        </p>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {interviews.map((item) => (

            <div
              key={item.id}
              className="bg-zinc-900 border border-cyan-500/20 rounded-3xl p-8 shadow-xl"
            >

              <div className="flex items-center justify-between">

                <h2 className="text-3xl font-bold">
                  {item.role}
                </h2>

                <span className="text-cyan-400 font-bold text-xl">
                  {item.overallScore}/10
                </span>

              </div>

              <p className="text-gray-500 mt-2">
                {new Date(
                  item.createdAt
                ).toLocaleString()}
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="bg-black rounded-2xl p-4">
                  <p className="text-gray-400 text-sm">
                    Technical
                  </p>

                  <h3 className="text-3xl font-bold text-cyan-400">
                    {item.technicalScore}
                  </h3>
                </div>

                <div className="bg-black rounded-2xl p-4">
                  <p className="text-gray-400 text-sm">
                    Communication
                  </p>

                  <h3 className="text-3xl font-bold text-green-400">
                    {item.communicationScore}
                  </h3>
                </div>

                <div className="bg-black rounded-2xl p-4">
                  <p className="text-gray-400 text-sm">
                    Confidence
                  </p>

                  <h3 className="text-3xl font-bold text-yellow-400">
                    {item.confidenceScore}
                  </h3>
                </div>

              </div>

              <div className="mt-8">

                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  Strengths
                </h3>

                <p className="text-gray-300">
                  {item.strengths}
                </p>

              </div>

              <div className="mt-6">

                <h3 className="text-xl font-bold text-red-400 mb-2">
                  Weaknesses
                </h3>

                <p className="text-gray-300">
                  {item.weaknesses}
                </p>

              </div>

              <div className="mt-6">

                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  Suggestions
                </h3>

                <p className="text-gray-300">
                  {item.suggestions}
                </p>

              </div>

              <div className="mt-6">

                <h3 className="text-xl font-bold text-green-400 mb-2">
                  Final Feedback
                </h3>

                <p className="text-gray-300">
                  {item.finalFeedback}
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

    </main>
  );
}