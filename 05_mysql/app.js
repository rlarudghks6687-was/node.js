const express = require("express");
const path = require("path");
//.env환경변수
require("dotenv").config();

const mysql = require("./index");
const encrypto = require("./crypto");
const nodemailer = require("./nodemailer");
const { upload } = require("./multer");
const { excel_run } = require("./excel");

//express인스턴스
const app = express();

//body-parser
app.use(express.json());
//정적 페이지
app.use(express.static("public"));
//라우팅
//1. 전체 목록 조회. 리소스 + 요청방식 -> CRUD(REST 방식)
app.get("/api/customer", async (req, res) => {
  const result = await mysql.query("customerList");
  console.log(result);

  //결과응답 json 문자열로 반환
  res.json(result);
});
//2. 등록
app.post("/api/customer", async (req, res) => {
  const { name, email, phone, passwd } = req.body;
  //암호화 단계
  const hashPasswd = await encrypto.createPassword(passwd);

  const result = await mysql.query("customerInsert", [
    { name, email, phone, passwd: hashPasswd },
  ]);

  res.json(result);
});
//3. 수정
app.put("/api/customer", async (req, res) => {
  const { name, email, phone, id } = req.body;
  const result = await mysql.query("customerUpdate", [
    { name, email, phone },
    id,
  ]);

  res.json(result);
});
//4. 삭제
app.delete("/api/customer/:id", async (req, res) => {
  const id = req.params.id;
  const result = await mysql.query("customerDelete", [id]);

  res.json(result);
});
//5. 조회(로그인: id(email), passwd(평문 vs 암호화))
app.post("/api/login", async (req, res) => {
  //조회(email 기준으로 조회.)
  const { email, plaintTxt } = req.body;
  // const email = req.body.email;
  // const plaintTxt = req.body.passwd;
  const [{ passwd }] = await mysql.query("customerSelect", [email]);
  // console.log(passwd);
  // console.log(plaintTxt);
  //checkPassword()
  const success = await encrypto.checkPassword(plaintTxt, passwd);
  console.log(success);
  res.json({ success }); //로그인 성공 여부
});
//6.메일발송
app.post("/api/mail", upload.single("file"), async (req, res) => {
  const { from, to, subject, text } = req.body;
  console.log(req);

  //multi 라인으로 변경
  const html = text
    .split("\n")
    .map((elem) => `<p>${elem}</p>`)
    .join("");

  //메일정보 파일첨부 여부에 따라 처리
  let attachments;
  if (req.file == undefined) {
    attachments = null;
  } else {
    attachments = [
      {
        filename: req.file.filename,
        path: req.file.path, //path.join(__dirname, req.file.destination, req.file.filename),
      },
    ];
  }
  const postData = {
    from,
    to,
    subject,
    html,
    attachments,
  };

  const result = await nodemailer.send(postData);
  if (result.messageId) {
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
  // res.json(result);
  // res.send("<p>메일발송성공</p>");
});

//엑셀파일 첨부 후 db insert
app.post("/api/excel_upload", upload.single("myFile"), async (req, res) => {
  try {
    await excel_run(req.file.path);
    res.json({
      retCode: "OK",
      retMsg: `${req.file.filename.replace(/_\d+/, "")} upload successful`,
    });
  } catch (err) {
    res.json({ retCode: "NG", retMsg: err });
  }
});

app.listen(3000, () => {
  console.log("server is runing");
});
