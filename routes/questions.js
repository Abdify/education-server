import express from "express";
import { addQuestion, getQuestions } from "../controllers/questions.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getQuestions);
router.post("/", auth, addQuestion);

export default router;
