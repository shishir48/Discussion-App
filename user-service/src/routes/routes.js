const express = require("express")
const router = express.Router()
const {
  register,
} = require("../controllers/users/register/register.controller")
const {login} = require("../controllers/users/login/login.controller")

router.post("/register", register)
router.post("/login", login)

module.exports = router
