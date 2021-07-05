import express from "express";
import { addSubject, getSubjects } from "../controllers/subjects.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getSubjects);
router.post("/", auth, addSubject);

export default router;
