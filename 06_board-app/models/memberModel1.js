const pool = require("../config/db");

//등록(insert)
async function createMember1(loginId, name, password, role) {
  const sql = `
    INSERT INTO tbl_member(login_id, name, password, role)
    VALUES  (?, ?, ?, ?)`;
  return pool.query(sql, [loginId, name, password, role]);
}

//조회
async function findMemberById1(loginId) {
  const sql = `select * from tbl_member where login_id = ?`;
  return pool.query(sql, [loginId]);
}

module.exports = { createMember1, findMemberById1 };
