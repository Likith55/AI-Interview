"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveInterview = saveInterview;
exports.getInterviews = getInterviews;
exports.getLeaderboard = getLeaderboard;
const prisma_1 = require("../lib/prisma");
const feedback_service_1 = require("../services/feedback.service");
/*
|--------------------------------------------------------------------------
| Save Interview
|--------------------------------------------------------------------------
*/
async function saveInterview(req, res) {
    try {
        const { transcript, role, userName, } = req.body;
        const feedback = await (0, feedback_service_1.generateFeedback)(transcript);
        const interview = await prisma_1.prisma.interview.create({
            data: {
                userName,
                role,
                transcript,
                technicalScore: feedback.technicalScore,
                communicationScore: feedback.communicationScore,
                confidenceScore: feedback.confidenceScore,
                overallScore: feedback.overallScore,
                strengths: feedback.strengths,
                weaknesses: feedback.weaknesses,
                suggestions: feedback.suggestions,
                finalFeedback: feedback.finalFeedback,
            },
        });
        res.status(201).json({
            success: true,
            interview,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to save interview",
        });
    }
}
/*
|--------------------------------------------------------------------------
| Get All Interviews
|--------------------------------------------------------------------------
*/
async function getInterviews(_req, res) {
    try {
        const interviews = await prisma_1.prisma.interview.findMany({
            orderBy: {
                overallScore: "desc",
            },
        });
        res.status(200).json({
            success: true,
            interviews,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch interviews",
        });
    }
}
/*
|--------------------------------------------------------------------------
| Leaderboard
|--------------------------------------------------------------------------
*/
async function getLeaderboard(_req, res) {
    try {
        const leaderboard = await prisma_1.prisma.interview.findMany({
            orderBy: {
                overallScore: "desc",
            },
            take: 10,
        });
        res.status(200).json({
            success: true,
            leaderboard,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch leaderboard",
        });
    }
}
