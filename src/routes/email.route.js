const express = require("express")
const router = express.Router()
const emailController = require("../controllers/email.controller")

router.post("/welcome", emailController.sendWelcomeEmail)
router.post("/analysis-complete", emailController.sendAnalysisCompleteEmail)
router.post("/test", emailController.sendTestEmail)

module.exports = router
