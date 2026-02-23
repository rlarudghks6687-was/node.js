const express = require("express"); //임포트
const app = express(); //인스턴스
const customerRoute = require("./routes/customer");
const fs = require("fs");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const cors = require("cirs");
const compression = require("compression");

//정적파일 폴더(html,css,js)
app.use(express.static("public"));

//body parser 셋업
app.use(express.urlencoded()); //x-www-form-urlencoded
app.use(express.json()); //json
app.use("/customer/download", compression()); //모든 라우팅에 적용

//session 관리
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // true -> https, false -> http
      maxAge: 60000,
    },
    // store: new fileStore(), //추가
  }),
);

//cors 셋업
app.use(cors());

//라우팅. 요청방식+URL(end point) -> 실행할 함수
app.get("/", (req, res) => {
  //fs.readFile 메서드/ fs.readFileSync
  const data = fs.readFileSync("index.html", "utf-8");
  res.status(200).send(data);
});

//외부 라우팅 정보
app.use("/customer", customerRoute);
app.use("/product", require("./routes/product"));

app.get("/data", (rea, res) => {
  res.json({ id: "1001", data: "sample" });
});

//session
app.get("/login", (req, res) => {
  req.session.user = { id: "was", name: "Kim" };
  console.log(req.session.user);
  res.send("session에 저장");
});

app.get("/logout", (req, res) => {
  req.session.destroy(); //세션삭제
  res.send("로그아웃");
});

app.get("/my_info", (req, res) => {
  console.log(req.session.user);
  if (!req.session.user) {
    res.json({ retCode: "NG", retMsg: "No user info" });
    return;
  }
  res.json(req.session.user);
});

// express에서 에러처리
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMsg: err.message });
});

//서버실행
app.listen(3000, () => {
  console.log("서버실행... http://localhost:3000");
});
