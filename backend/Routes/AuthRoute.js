const { Signup, Login } = require("../controller/AuthController");
const router = require("express").Router();

const {userVerification} = require("../middleware/AuthMiddleware");

router.post('/verify', userVerification)
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;