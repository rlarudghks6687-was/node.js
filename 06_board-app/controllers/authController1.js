const authService = require("../services/authService1");

//회원가입
const signup1 = async (req, res) => {
  const { loginId, name, password, role } = req.body;
  await authService.signup(loginId, name, password, role);

  res.json({ retCode: "OK" });
};

//로그인
const login1 = async (req, res) => {
  const { loginId, password } = req.body;
  const success = await authService.login(loginId, password);
  //로그인 확인 //falsy처리[null, '', 0, undefined]
  if (success) {
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
};

module.exports = { signup1, login1 };
