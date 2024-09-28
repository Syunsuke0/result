import { Schema, model } from "mongoose";

const resultSchema = Schema({
  match_result: {
    type: String,
    enum: ["win", "lose", "draw"],
    required: true,
  },
  character_used: {
    type: String,
    enum: ["女王", "破輪", "魔女"],
    required: true,
  },
  map: {
    type: String,
    required: true,
    enum: [
      "軍需工場",
      "赤の教会",
      "聖心病院",
      "湖景村",
      "月の河公園",
      "レオの思い出",
      "永眠町",
      "中華街",
    ],
  },
});

const Result = model("Result", resultSchema);
export default Result;
