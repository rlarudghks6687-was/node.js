//express 인스턴스
const express = require("express");

//웹서버 인스턴스
const app = express();

//서버 시작
app.listen(3000, () => {
  console.log("http://localhost3000 is running");
});
