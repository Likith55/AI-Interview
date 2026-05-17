import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateInterviewQuestions(
  role: string,
  level: string
) {
  const prompt = `
Generate 5 technical interview questions.

Role: ${role}
Experience Level: ${level}

Return concise interview questions only.
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
}