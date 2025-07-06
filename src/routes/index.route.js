const express = require("express")
const router = express.Router()
const emailRoutes = require("./email.route")

router.use("/email", emailRoutes)

module.exports = router
