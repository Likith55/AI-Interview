import OpenAI from "openai";

import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey:
    process.env.OPENROUTER_API_KEY,

  baseURL:
    "https://openrouter.ai/api/v1",
});

export async function generateFeedback(
  transcript: string
) {

  try {

    const completion =
      await client.chat.completions.create({
        model:
          "openai/gpt-3.5-turbo",

        response_format: {
          type: "json_object",
        },

        messages: [
          {
            role: "system",

            content:
              "You are an expert AI interviewer.",
          },

          {
            role: "user",

            content: `
Analyze this interview transcript.

Return valid JSON only.

{
  "technicalScore": number,
  "communicationScore": number,
  "confidenceScore": number,
  "overallScore": number,
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "finalFeedback": ""
}

Transcript:
${transcript}
`,
          },
        ],
      });

    const content =
      completion.choices[0]
      .message.content;

    return JSON.parse(
      content || "{}"
    );

  } catch (error) {

    console.error(
      "FEEDBACK ERROR:",
      error
    );

    return null;
  }
}