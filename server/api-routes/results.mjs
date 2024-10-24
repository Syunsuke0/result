import express from "express";
import Result from "../models/results.mjs";

const router = express.Router();

// /api/results
router.get("/", async (req, res) => {
  const results = await Result.find();
  res.json(results);
});

router.post("/", async (req, res) => {
  const result = new Result(req.body);
  const newResult = await result.save();
  res.json(newResult);
});

export default router;
