import { Router } from "express";

import { uploadResume } from "../controllers/resume.controller";
import { upload } from "../middleware/upload.middleware";

const router = Router();

router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

export default router;