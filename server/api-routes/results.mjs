import express from "express";
import Result from "../models/results.mjs";

const router = express.Router();

// /api/results
router.get("/", async (req, res) => {
  const results = await Result.find();
  res.json(results);
});

export default router;
