const User = require("../../../models/user/user.model")
const generateToken = require("../../../utils/generateToken")

exports.register = async (req, res) => {
  console.log("register controller")
  const { name, email, mobile, password } = req.body

  try {
    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.status(400).json({ message: "User already exists" })
    }

    const user = await User.create({
      name,
      email,
      mobile,
      password,
    })

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        token: generateToken(user._id),
      })
    } else {
      res.status(400).json({ message: "Invalid user data" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}
