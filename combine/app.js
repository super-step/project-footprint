const express = require("express");
var cors = require("cors");
const ejs = require("ejs");
const app = express();
const port = 8000;
var indexRouter = require("./public/views");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*
cors
요청 허용 거절 가능
비워두면 모든 요청 허용하겠다는 의미
*/
app.use(cors());
// app.use(express.static("public"));

app.use(express.static(__dirname + "/public"));

app.set("views", __dirname + "/public/views"); // public 안에 views 폴더 안을 지정
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", indexRouter);
module.exports = app;
// app.get("/주소~/:code", (req, res) => {

//     res.render('');

// });
app.get("/", (req, res) => {
  res.render("public/views/index.html");
});
app.get("/map/:area", (req, res) => {
  const { area } = req.params;
  res.render("./public/views/API_map.html");
  if (area == "jn") {
    console.log(area);
  } else if (area == "gj") {
    console.log(area);
  } else {
    alert("x");
  }
});
// app.get("/sound/:name", (req, res) => {
//   const { name } = req.params;
//   if (name == "dog") {
//     res.json({ sound: "멍멍" });
//   } else {
//     res.json({ sound: "알수없음" });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
