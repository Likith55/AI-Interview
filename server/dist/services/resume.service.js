"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractResumeText = extractResumeText;
const fs_1 = __importDefault(require("fs"));
const pdfParse = require("pdf-parse");
async function extractResumeText(filePath) {
    try {
        const dataBuffer = fs_1.default.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        return data.text;
    }
    catch (error) {
        console.error("PDF Parse Error:", error);
        return "Failed to parse PDF";
    }
}
