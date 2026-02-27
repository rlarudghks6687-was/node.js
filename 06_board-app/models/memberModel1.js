const pool = require("../config/db");
//db의 table에 저장 및 조회

//등록(insert)                아이디,  이름,    비번,  등급
async function createMember1(loginId, name, password, role) {
  const sql = `
    INSTER INTO tbl_member(login_id, name, password, role)
    VALUES (?, ?, ?, ?)`;
  return pool.query(sql, [loginId, name, password, role]);
}

//조회            db에 등록된 아이디가 있을 시 원하는 권한 제공
async function findMemberById1(loginId) {
  const sql = `select * from tbl_member where login_id = ?`;
  return pool.query(sql, [loginId]);
}

module.exports = { createMember1, findMemberById1 };
