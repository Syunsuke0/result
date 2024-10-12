const express = require("express");
const app = express();
const apiRoutes = require("./server/api-routes");
const { connect, Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const cors = require("cors");

const env = require("dotenv");
env.config();

//API
app.use("/api", apiRoutes);

//JSONデータのパースを有効化
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//corsの設定
app.use(
  cors({
    origin: "http://localhost:3000", // Reactアプリが動作しているURLを指定
    methods: ["POST", "GET"],
    credentials: true,
  })
);

//mongooseとの接続
connect(process.env.MONGO_URI);

const resultSchema = new Schema(
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

const Result = model("Result", resultSchema);

app.get("/api/results", async (req, res) => {});

app.post("/api/results", (req, res) => {});

app.listen(port, () => {
  console.log(`ポート${port}でリクエストを受付中...`);
});
