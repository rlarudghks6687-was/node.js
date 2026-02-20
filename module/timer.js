const { Console } = require("console");
const fs = require("fs"); //내장모듈

// //timer.js
// setTimeout(function () {
//   console.log("1초 후 실행");
// }, 1000);

// const job = setInterval(function () {
//   console.log("1초마다 실행");
// }, 1000);

// //종료
// setTimeout(() => {
//   clearInterval(job);
// }, 10000);

const output = fs.createWriteStream("./output/stdout.log", { flags: "a" });

const logger = new Console({ stdout: output });
const work = setInterval(function () {
  logger.log("현재시간에 실행" + new Date());
}, 1000);

setTimeout(() => {
  clearInterval(work);
}, 10000);

module.exports = { logger };
