import express from "express";
import { addChapter, getChapters } from "../controllers/chapters.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getChapters);
router.post("/", auth, addChapter);

export default router;
