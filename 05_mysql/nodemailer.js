const nodemailer = require("nodemailer");

//nodemailer 모듈의 createTransport함수 -> transport 객체
const gogleConfig = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "@gmail.com",
    pass: "",
  },
};

const daum = {
  host: "",
  port: 587,
  secure: false,
  auth: {
    user: "",
    pass: "",
  },
};

const send = async (data) => {
  return new Promise((resolve, reject) => {
    const transport = nodemailer.createTransport(gogleConfig);
    transport.sendMail(data, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(result);
      resolve(result);
    });
  });
};
//메일발송
// transport.sendMail(
//   {
//     from: "rlarudghks6687@gmail.com",
//     to: "shade6687@naver.com",
//     subject: "Say hello to my little frend!",
//     text: "BOT OH CYKA",
//   },
//   (err, data) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(data);
//   },
// );
module.exports = { send };
