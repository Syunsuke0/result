import express from "express";

const router = express.Router();

///api/results
router.get("/", (req, res) => {
  res.send("/api/results");
});

export default router;
