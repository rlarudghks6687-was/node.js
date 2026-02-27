const router = require("express").Router();
const ctrl = require("../controllers/authController1");

//CUD
//ctrl.create
router.post("/", ctrl.signup1);
router.post("/login", ctrl.login1);

module.exports = router;
