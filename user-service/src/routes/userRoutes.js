const express = require("express")
const router = express.Router()
const {
  getUsers,
} = require("../controllers/users/get-users/get-users.controller")
const { authorize } = require("../middleware/auth.middleware")

router.get("/", authorize, getUsers)

module.exports = router
