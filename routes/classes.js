import express from "express";
import { addClass, getClasses } from "../controllers/classes.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getClasses);
router.post("/", auth, addClass);

export default router;
