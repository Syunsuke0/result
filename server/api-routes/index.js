const express = require("express");
const resultsRouter = require("./results.js");

const router = express.Router();
router.use("/results", resultsRouter);

export default router;
