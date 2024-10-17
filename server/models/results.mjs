import { Schema, model } from "mongoose";

const resultsSchema = Schema(
  {
    usedCharacter: {
      type: String,
      enum: ["女王", "破輪", "魔女", "ガラテア"],
      required: true,
    },
    usedMap: {
      type: String,
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
      required: true,
    },
    result: {
      type: String,
      enum: ["win", "draw", "lose"],
      required: true,
    },
  },
  { timestamps: true }
);

const Result = model("Result", resultsSchema);
export default Result;
