//컨트롤(라우트 핸들러)
const boardService = require("../services/boardService");

const list = async (req, res) => {
  const [rows] = await boardService.getList();
  console.log("현재로그인정보: ", req.session.user.login_id);
  res.json(rows); //화면에 출력될 결과
};

//상세조회
const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  res.json(rows);
};

//등록(create)
const create = async (req, res) => {
  const { title, content, id } = req.body;
  // console.log(req.body);
  const [rows] = await boardService.create(title, content, id);
  res.json(rows);
};

module.exports = { list, detail, create };

//get: req.params
//post: req.body
