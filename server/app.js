const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const cors = require("cors");

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

app.post("/api/results", (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.send("フォームデータを受け取りました");
});

app.listen(port, () => {
  console.log(`ポート${port}でリクエストを受付中...`);
});
