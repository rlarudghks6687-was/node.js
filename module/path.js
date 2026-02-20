//path.js
const path = require("path");
const fs = require("fs");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename, ".js")); //경로의 마지막 부분 확장자 제거
console.log(path.extname(__filename)); //파일의 확장자 반환

console.log(path.parse(__filename)); //parse -> root, dir, base, ext
console.log(path.format({ dir: "D:\\git\\node.js", base: "sample.txt" }));
console.log(path.join("D:\\git", "node.js", "module", "sample.txt"));

const filePath = path.join(__dirname, "package.json");

//file i/o 처리 callback함수
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    (console, log(err));
    return;
  }
  fs.writeFile(__dirname + "\\todo.txt", data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("write doen");
  });
});
// const data = fs.readFileSync(filePath, "utf-8"); //readFileSync: 읽기전용
// console.log(data);

console.log("end of prog");
