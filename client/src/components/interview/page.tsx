"use client";

import { useState } from "react";

import InterviewTimer from "@/components/interview/InterviewTimer";
import QuestionCard from "@/components/interview/QuestionCard";
import AnswerBox from "@/components/interview/AnswerBox";

const questions = [
  "Explain React reconciliation.",
  "What is Virtual DOM?",
  "Difference between useEffect and useLayoutEffect?",
  "Explain closures in JavaScript.",
  "How does event bubbling work?",
];

export default function InterviewPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");

  const totalQuestions = questions.length;

  function handleNext() {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setAnswer("");
    } else {
      alert("Interview Completed!");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold">
            AI Mock Interview
          </h1>

          <InterviewTimer />
        </div>

        <QuestionCard
          question={questions[currentQuestion]}
          current={currentQuestion + 1}
          total={totalQuestions}
        />

        <div className="mt-8">
          <AnswerBox
            answer={answer}
            setAnswer={setAnswer}
          />
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300"
          >
            {currentQuestion === totalQuestions - 1
              ? "Finish Interview"
              : "Next Question"}
          </button>
        </div>

      </div>
    </main>
  );
}