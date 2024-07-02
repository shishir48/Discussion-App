const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
require("./config/db")()
const authRoutes = require("./routes/routes")
const port = process.env.PORT || 3001

app.use(express.json())
app.use("/api/auth", authRoutes)

app.listen(port, () => {
  console.log(`user service is running on port ${port}`)
})
