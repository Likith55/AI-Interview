"use client";

interface Props {
  answer: string;
  setAnswer: (value: string) => void;
}

export default function AnswerBox({
  answer,
  setAnswer,
}: Props) {
  return (
    <textarea
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder="Type your answer here..."
      className="w-full h-52 p-6 rounded-2xl bg-white/5 border border-white/10 outline-none resize-none"
    />
  );
}