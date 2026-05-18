import OpenAI from "openai";

import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({

  apiKey:
    process.env.OPENROUTER_API_KEY,

  baseURL:
    "https://openrouter.ai/api/v1",
});

export async function analyzeResume(
  resumeText: string
) {

  try {

    const completion =
      await client.chat.completions.create({

        model:
          "openai/gpt-3.5-turbo",

        messages: [

          {
            role: "system",

            content:
              "You are an expert ATS resume analyzer.",
          },

          {
            role: "user",

            content: `

Analyze this resume professionally.

Provide:

1. ATS Score out of 100
2. Best Matching Job Role
3. Technical Skills
4. Strengths
5. Weaknesses
6. Missing Keywords
7. Resume Improvement Suggestions
8. Suggested Interview Topics

Return the response in a professional format.

Resume:

${resumeText}

`,
          },
        ],
      });

    return (
      completion.choices[0]
        .message.content ||

      "No analysis generated."
    );

  } catch (error) {

    console.error(
      "AI ERROR:",
      error
    );

    return "Failed to analyze resume.";
  }
}