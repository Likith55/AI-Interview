"use client";

interface Props {
  question: string;
  current: number;
  total: number;
}

export default function QuestionCard({
  question,
  current,
  total,
}: Props) {
  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <p className="text-cyan-400 mb-4">
        Question {current} of {total}
      </p>

      <h2 className="text-2xl font-semibold leading-relaxed">
        {question}
      </h2>
    </div>
  );
}