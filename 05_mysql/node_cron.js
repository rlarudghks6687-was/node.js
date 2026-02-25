const cron = require("node-cron");
const { logger } = require("./winston");
require("dotenv").config();
const nodemailer = require("./nodemailer");
//주기적으로 실행

//           초, 분, 시, 일, 달, 요일
cron.schedule("*/10 * * * * *", () => {
  // console.log(Date.now());
  nodemailer.send({
    from: "rlarudghks6687@gmail.com",
    to: "shade6687@naver.com",
    subject: "스케줄러",
    text: "node cron active",
  });
  logger.info("cron job 실행");
});
