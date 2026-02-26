//express 인스턴스
const express = require("express");
const session = require("express-session");
require("dotenv").config();

//웹서버 인스턴스
const app = express();
app.use(express.static("public"));
//json body-paraser
app.use(express.json());
//express-session setup
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // true -> https, false -> http
      maxAge: 10 * 60 * 1000,
    },
    // store: new fileStore(), //추가
  }),
);

//라우팅
app.use("/api/board", require("./routes/boardRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

//서버 시작
app.listen(3000, () => {
  console.log("http://localhost3000 is running");
});

//http://localhost3000/board => 전체목록
//http://localhost3000/board/1 => 단건조회
//http://localhost3000/api/board.html => 단건조회
