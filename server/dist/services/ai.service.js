"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeResume = analyzeResume;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new openai_1.default({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});
async function analyzeResume(resumeText) {
    try {
        const completion = await client.chat.completions.create({
            model: "openai/gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are an expert ATS resume analyzer.",
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
        return (completion.choices[0]
            .message.content ||
            "No analysis generated.");
    }
    catch (error) {
        console.error("AI ERROR:", error);
        return "Failed to analyze resume.";
    }
}
