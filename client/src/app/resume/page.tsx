"use client";

import { useState } from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

export default function ResumePage() {

  const [file, setFile] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [analysis, setAnalysis] =
    useState("");

  const router = useRouter();

  async function uploadResume() {

    if (!file) return;

    try {

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "resume",
        file
      );

      const response =
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/resume/upload`,
          formData,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      const data =
        response.data;

      setAnalysis(
        data.analysis
      );

      localStorage.setItem(
        "resumeText",
        data.resumeText
      );

      localStorage.setItem(
        "resumeAnalysis",
        data.analysis
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  }

  return (

    <main className="min-h-screen bg-black text-white flex flex-col items-center p-10">

      <h1 className="text-6xl font-bold mb-10">

        ATS Resume Analyzer

      </h1>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 w-full max-w-4xl">

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] || null
            )
          }
          className="mb-6"
        />

        <button
          onClick={uploadResume}
          disabled={loading}
          className="px-8 py-4 bg-cyan-500 rounded-2xl text-black font-bold text-xl"
        >

          {loading
            ? "Analyzing..."
            : "Analyze Resume"}

        </button>

        {analysis && (

          <div className="mt-10 bg-black rounded-2xl p-8 border border-cyan-500/20">

            <h2 className="text-4xl font-bold mb-6 text-cyan-400">

              ATS Analysis

            </h2>

            <pre className="whitespace-pre-wrap text-gray-300 text-lg leading-8">

              {analysis}

            </pre>

            <button
              onClick={() =>
                router.push(
                  "/interview"
                )
              }
              className="mt-10 px-8 py-4 bg-green-500 rounded-2xl text-black font-bold text-xl"
            >

              Continue To Interview

            </button>

          </div>
        )}

      </div>

    </main>
  );
}