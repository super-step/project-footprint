const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

/*
cors
요청 허용 거절 가능
비워두면 모든 요청 허용하겠다는 의미
*/
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
