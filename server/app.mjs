import express from "express";
const app = express();
import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";
import bodyParser from "body-parser";
const port = process.env.PORT || 8080;
import cors from "cors";

import env from "dotenv";
env.config();

//corsの設定
app.use(
  cors({
    origin: "http://localhost:3000", // Reactアプリが動作しているURLを指定
    methods: ["POST", "GET"],
    credentials: true,
  })
);

//JSONデータのパースを有効化
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`ポート${port}でリクエストを受付中...`);
});
