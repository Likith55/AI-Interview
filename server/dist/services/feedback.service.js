"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFeedback = generateFeedback;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new openai_1.default({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});
async function generateFeedback(transcript) {
    try {
        const completion = await client.chat.completions.create({
            model: "openai/gpt-3.5-turbo",
            response_format: {
                type: "json_object",
            },
            messages: [
                {
                    role: "system",
                    content: "You are an expert AI interviewer.",
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
        const content = completion.choices[0]
            .message.content;
        return JSON.parse(content || "{}");
    }
    catch (error) {
        console.error("FEEDBACK ERROR:", error);
        return null;
    }
}
