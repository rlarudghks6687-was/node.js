//exp.js
//문자열 특정패턴 찾기
console.log("Hello, World".replace(/l/g, "L")); //g: 전역 검색 - 대응되는 문자 전부 검색
console.log(
  /^(01[016789]|02|0[3-9][0-9])-\d{3,4}-\d{4}$/i.test("010-1234-5678"),
); //i: 대소문자 구분 없는 검색
// let result = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
//   "test@email.co.kr",
// );
console.log(result);
