import express from "express";
import cors from "cors";

import interviewRoutes from "./routes/interview.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend Running...");
});

app.use("/api/interview", interviewRoutes);

export default app;