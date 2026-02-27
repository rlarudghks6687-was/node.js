const bcrypt = require("bcrypt");
const authModel = require("../models/memberModel1");

//회원가입(signup)
async function signup1(loginId, name, password, role) {
  const hashed = await bcrypt.hash(password, 10); //평문 암호화, 10은 saltRounds 암호화 강도 (높을수록 보안 강화)
  // console.log(hashed);
  //생성한 아이디, 비번, 이름, 등급 createMember1()로 전달, 저장
  return authModel.createMember1(loginId, name, hashed, role);
}

//로그인
async function login1(loginId, password) {
  //[rows] = [데이터 배열, 필드 정보 배열] 형식 배열 반환
  //[]처리 없이 사용 할 경우
  //const result = await authModel.findMemberById1(loginId);
  //const rows = result[0]; // 첫 번째 요소(데이터)를 따로 꺼내야 함
  const [rows] = await authModel.findMemberById1(loginId);
  console.log(rows);
  //조회
  //조회된 결과 X 실패
  if (rows.length == 0) {
    return null;
  }
  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return null;
  }
  return user;
}

module.exports = { signup1, login1 };
