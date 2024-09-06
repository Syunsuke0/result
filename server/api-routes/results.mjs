import express from "express";
import Result from "../models/result.mjs";

const router = express.Router();

///api/results
router.get("/", async (req, res) => {
  const results = await Result.find();
  res.json(results);
});

router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  await Result.deleteOne({ _id });
  res.json({ msg: "Delete succeed." });
});

router.post("/", async (req, res) => {
  const result = new Result(req.body);
  const newResult = await result.save();
  res.json(newResult);
});
export default router;
