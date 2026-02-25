//엑셀파일 읽기 readFile
//시트중에서 첫번째 [0] -> 시트이름 읽기
//-> json, csv, 메서드
const xlsx = require("xlsx");
const mysql = require("./index");

async function excel_run(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  console.log(sheetName);
  const firstSheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(firstSheet);
  console.log(jsonData);

  for (let prof of jsonData) {
    // console.log(prof["이름"]);
    const param = {
      name: prof["이름"],
      email: prof["이메일"],
      phone: prof["연락처"],
      passwd: prof["비밀번호"],
    };
    try {
      const result = await mysql.query("customerInsert", [param]);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = { excel_run };
