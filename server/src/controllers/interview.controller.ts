import { Request, Response } from "express";
import { generateInterviewQuestions } from "../services/interview.service";

export async function createInterview(
  req: Request,
  res: Response
) {
  try {
    const { role, level } = req.body;

    const questions = await generateInterviewQuestions(
      role,
      level
    );

    res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate interview",
    });
  }
}