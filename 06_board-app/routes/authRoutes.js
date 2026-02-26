const router = require("express").Router();
const ctrl = require("../controllers/authController");

//CUD
//ctrl.create
router.post("/", ctrl.signup);
router.post("/login", ctrl.login);

module.exports = router;
