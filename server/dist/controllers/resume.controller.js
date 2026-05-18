"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadResume = uploadResume;
const resume_service_1 = require("../services/resume.service");
const ai_service_1 = require("../services/ai.service");
async function uploadResume(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }
        const resumeText = await (0, resume_service_1.extractResumeText)(req.file.path);
        const analysis = await (0, ai_service_1.analyzeResume)(resumeText);
        res.status(200).json({
            success: true,
            resumeText,
            analysis,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Resume upload failed",
        });
    }
}
