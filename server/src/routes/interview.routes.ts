import express from "express";

import {
  saveInterview,
  getInterviews,
  getLeaderboard,
} from "../controllers/interview.controller";

const router = express.Router();

router.post(
  "/save",
  saveInterview
);

router.get(
  "/all",
  getInterviews
);

router.get(
  "/leaderboard",
  getLeaderboard
);

export default router;