import express from "express";
import { searchEq2 } from "../controllers/searchEq2.js";

const router = express.Router();

router.get("/", searchEq2);
router.post("/", searchEq2);

export default router;
