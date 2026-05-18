import fs from "fs";

const pdfParse = require("pdf-parse");

export async function extractResumeText(
  filePath: string
) {
  try {
    const dataBuffer = fs.readFileSync(filePath);

    const data = await pdfParse(dataBuffer);

    return data.text;
  } catch (error) {
    console.error("PDF Parse Error:", error);

    return "Failed to parse PDF";
  }
}