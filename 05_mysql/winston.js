const winston = require("winston");

// 로거 인스턴스 생성
const logger = winston.createLogger({
  level: "info", // 'info' 레벨 이상의 로그만 출력
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`,
    ),
  ),
  transports: [
    new winston.transports.Console(), // 콘솔에 로그 출력
    new winston.transports.File({ filename: "logs/combined.log" }), // 모든 로그를 combined.log 파일에 저장
    new winston.transports.File({ filename: "logs/error.log", level: "error" }), // 'error' 레벨 로그만 error.log 파일에 저장
  ],
});

// 다양한 레벨의 로그 출력(info < warn < error)
//
module.exports = { logger };
