import { Request, Response } from "express";

import { prisma } from "../lib/prisma";

import {
  generateFeedback,
} from "../services/feedback.service";

/*
|--------------------------------------------------------------------------
| Save Interview
|--------------------------------------------------------------------------
*/

export async function saveInterview(
  req: Request,
  res: Response
) {

  try {

    const {
      transcript,
      role,
      userName,
    } = req.body;

    const feedback =
      await generateFeedback(
        transcript
      );

    const interview =
      await prisma.interview.create({
        data: {

          userName,

          role,

          transcript,

          technicalScore:
            feedback.technicalScore,

          communicationScore:
            feedback.communicationScore,

          confidenceScore:
            feedback.confidenceScore,

          overallScore:
            feedback.overallScore,

          strengths:
            feedback.strengths,

          weaknesses:
            feedback.weaknesses,

          suggestions:
            feedback.suggestions,

          finalFeedback:
            feedback.finalFeedback,
        },
      });

    res.status(201).json({
      success: true,
      interview,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to save interview",
    });
  }
}

/*
|--------------------------------------------------------------------------
| Get All Interviews
|--------------------------------------------------------------------------
*/

export async function getInterviews(
  _req: Request,
  res: Response
) {

  try {

    const interviews =
      await prisma.interview.findMany({

        orderBy: {
          overallScore: "desc",
        },

      });

    res.status(200).json({
      success: true,
      interviews,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch interviews",
    });
  }
}

/*
|--------------------------------------------------------------------------
| Leaderboard
|--------------------------------------------------------------------------
*/

export async function getLeaderboard(
  _req: Request,
  res: Response
) {

  try {

    const leaderboard =
      await prisma.interview.findMany({

        orderBy: {
          overallScore: "desc",
        },

        take: 10,

      });

    res.status(200).json({
      success: true,
      leaderboard,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch leaderboard",
    });
  }
}