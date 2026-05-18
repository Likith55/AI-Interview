"use client";

import { useEffect, useState } from "react";

import axios from "axios";

interface Interview {

  id: number;

  userName: string;

  role: string;

  overallScore: number;

  technicalScore: number;

  communicationScore: number;

  confidenceScore: number;
}

export default function LeaderboardPage() {

  const [leaderboard, setLeaderboard] =
    useState<Interview[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function fetchLeaderboard() {

      try {

        const response =
          await axios.get(
            "http://localhost:5000/api/interview/leaderboard"
          );

        setLeaderboard(
          response.data.leaderboard
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    }

    fetchLeaderboard();

  }, []);

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold mb-10">
        Leaderboard
      </h1>

      {loading ? (

        <p>Loading...</p>

      ) : leaderboard.length === 0 ? (

        <p>No leaderboard data found.</p>

      ) : (

        <div className="grid gap-6">

          {leaderboard.map(
            (item, index) => (

              <div
                key={item.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between"
              >

                <div>

                  <h2 className="text-3xl font-bold">

                    #{index + 1}{" "}

                    {item.userName}

                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {item.role}
                  </p>

                </div>

                <div className="text-right">

                  <h3 className="text-5xl font-bold text-cyan-400">

                    {item.overallScore}

                  </h3>

                  <p className="text-zinc-400">
                    Overall Score
                  </p>

                </div>

              </div>
            )
          )}

        </div>
      )}

    </main>
  );
}