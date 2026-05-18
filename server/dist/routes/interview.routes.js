"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const interview_controller_1 = require("../controllers/interview.controller");
const router = express_1.default.Router();
router.post("/save", interview_controller_1.saveInterview);
router.get("/all", interview_controller_1.getInterviews);
router.get("/leaderboard", interview_controller_1.getLeaderboard);
exports.default = router;
