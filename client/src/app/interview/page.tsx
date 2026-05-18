"use client";

import { useEffect, useState } from "react";

import Vapi from "@vapi-ai/web";

const vapi = new Vapi(
  process.env
    .NEXT_PUBLIC_VAPI_PUBLIC_KEY!
);

export default function InterviewPage() {

  const [isSpeaking, setIsSpeaking] =
    useState(false);

  const [callActive, setCallActive] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {

    /*
    |--------------------------------------------------------------------------
    | Call Started
    |--------------------------------------------------------------------------
    */

    vapi.on("call-start", () => {

      console.log("Call started");

      localStorage.removeItem(
        "latestTranscript"
      );

      setCallActive(true);

      setLoading(false);
    });

    /*
    |--------------------------------------------------------------------------
    | Call Ended
    |--------------------------------------------------------------------------
    */

    vapi.on("call-end", async () => {

      console.log("Call ended");

      setCallActive(false);

      setIsSpeaking(false);

      try {

        const transcript =
          localStorage.getItem(
            "latestTranscript"
          ) || "No transcript";

        await fetch(
          "http://localhost:5000/api/interview/save",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              role:
                "AI Software Engineer",

              transcript,
            }),
          }
        );

        console.log(
          "Interview Saved"
        );

      } catch (error) {

        console.error(
          "Save Error:",
          error
        );
      }
    });

    /*
    |--------------------------------------------------------------------------
    | Assistant Speaking
    |--------------------------------------------------------------------------
    */

    vapi.on("speech-start", () => {

      setIsSpeaking(true);
    });

    vapi.on("speech-end", () => {

      setIsSpeaking(false);
    });

    /*
    |--------------------------------------------------------------------------
    | Capture Transcript
    |--------------------------------------------------------------------------
    */

    vapi.on("message", (message: any) => {

      if (
        message.type === "transcript"
      ) {

        const previous =
          localStorage.getItem(
            "latestTranscript"
          ) || "";

        const updated =
          previous +
          "\n" +
          message.transcript;

        localStorage.setItem(
          "latestTranscript",
          updated
        );

        console.log(
          "Transcript Updated"
        );
      }
    });

    /*
    |--------------------------------------------------------------------------
    | Cleanup
    |--------------------------------------------------------------------------
    */

    return () => {

      vapi.stop();
    };

  }, []);

  /*
  |--------------------------------------------------------------------------
  | Start Interview
  |--------------------------------------------------------------------------
  */

  async function startInterview() {

    try {

      setLoading(true);

      const resumeAnalysis =
        localStorage.getItem(
          "resumeAnalysis"
        );

      const resumeText =
        localStorage.getItem(
          "resumeText"
        );

      await vapi.start(
        process.env
          .NEXT_PUBLIC_VAPI_ASSISTANT_ID!,
        {
          variableValues: {
            resumeAnalysis,
            resumeText,
          },
        }
      );

    } catch (error) {

      console.error(
        "Vapi Error:",
        error
      );

      setLoading(false);
    }
  }

  /*
  |--------------------------------------------------------------------------
  | Stop Interview
  |--------------------------------------------------------------------------
  */

  function stopInterview() {

    vapi.stop();
  }

  return (

    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 p-10">

      <h1 className="text-6xl font-bold text-center">
        AI Voice Interview
      </h1>

      <p className="text-gray-400 text-center max-w-2xl">
        Resume-based AI Interviewer powered by
        Vapi + Gemini AI.
      </p>

      <div
        className={`w-52 h-52 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300
        ${
          isSpeaking
            ? "bg-cyan-400 scale-110 animate-pulse shadow-[0_0_80px_#22d3ee]"
            : "bg-zinc-800"
        }`}
      >

        {isSpeaking
          ? "Speaking..."
          : callActive
          ? "Listening..."
          : "Ready"}

      </div>

      {!callActive ? (

        <button
          onClick={startInterview}
          disabled={loading}
          className="px-10 py-5 rounded-2xl bg-green-500 hover:bg-green-400 text-black font-bold text-2xl transition-all"
        >

          {loading
            ? "Starting..."
            : "Start Interview"}

        </button>

      ) : (

        <button
          onClick={stopInterview}
          className="px-10 py-5 rounded-2xl bg-red-500 hover:bg-red-400 text-white font-bold text-2xl transition-all"
        >
          End Interview
        </button>

      )}

    </main>
  );
}