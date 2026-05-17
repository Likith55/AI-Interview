import { Router } from "express";
import { createInterview } from "../controllers/interview.controller";

const router = Router();

router.post("/generate", createInterview);

export default router;