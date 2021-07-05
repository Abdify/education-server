import express from "express";
import { addTopic, getTopics } from "../controllers/topics.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getTopics);
router.post("/", auth, addTopic);

export default router;
