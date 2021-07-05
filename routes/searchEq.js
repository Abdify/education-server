import express from "express";
import { searchEq } from "../controllers/searchEq.js";

const router = express.Router();

router.get("/", searchEq);

export default router;
