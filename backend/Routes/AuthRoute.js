const { Signup, Login } = require("../controller/AuthController");
const router = require("express").Router();

const {userVerification} = require("../middleware/AuthMiddleware");

router.post('/', userVerification)
router.post("/auth/signup", Signup);
router.post("/auth/login", Login);

module.exports = router;