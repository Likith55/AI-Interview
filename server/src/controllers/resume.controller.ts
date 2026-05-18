import { Request, Response } from "express";

import {
  extractResumeText,
} from "../services/resume.service";

import {
  analyzeResume,
} from "../services/ai.service";

export async function uploadResume(
  req: Request,
  res: Response
) {

  try {

    if (!req.file) {

      return res.status(400).json({
        success: false,
        message:
          "No file uploaded",
      });
    }

    const resumeText =
      await extractResumeText(
        req.file.path
      );

    const analysis =
      await analyzeResume(
        resumeText
      );

    res.status(200).json({

      success: true,

      resumeText,

      analysis,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      success: false,

      message:
        "Resume upload failed",
    });
  }
}