import express from "express";
import resultsRouter from "./results.mjs";

const router = express.Router();
router.use("/results", resultsRouter);

export default router;
