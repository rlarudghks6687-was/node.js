const router = require("express").Router();
const ctrl = require("../controllers/boardController");
const mid = require("../middleware/auth");

//조회(Get요청)
// router.get("/", mid.authCheck, ctrl.list); //http://localhost:3000/board.html
router.get("/", mid.verifytoken, ctrl.list); // verifytoken으로 변경
router.get("/:id", ctrl.detail);

//CUD
//ctrl.create
// router.post("/", (req, res) => {
//   ctrl.create(req, res);
// });
router.post("/", mid.verifytoken, ctrl.create); //글등록

router.delete("/:id", mid.verifytoken, ctrl.remove); //글삭제

module.exports = router;
