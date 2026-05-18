import express from "express";

import cors from "cors";

import resumeRoutes
from "./routes/resume.routes";

import interviewRoutes
from "./routes/interview.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend Running...");
});

app.use(
  "/api/resume",
  resumeRoutes
);

app.use(
  "/api/interview",
  interviewRoutes
);

export default app;