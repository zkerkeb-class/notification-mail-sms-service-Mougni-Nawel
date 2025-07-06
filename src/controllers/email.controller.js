const emailService = require("../services/email.service");

const sendWelcomeEmail = async (req, res) => {
  try {
    const { email, firstname, lastname } = req.body;

    if (!email || !firstname) {
      return res.status(400).json({
        success: false,
        message: "Email et prénom requis",
      });
    }

    const result = await emailService.sendWelcomeEmail(email, firstname, lastname);

    res.json({
      success: true,
      message: "Email de bienvenue envoyé avec succès",
      data: result,
    });
  } catch (error) {
    console.error("Erreur envoi email de bienvenue:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi de l'email",
    });
  }
};

const sendAnalysisCompleteEmail = async (req, res) => {
  try {
    const { email, firstname, contractTitle, contractId, analysisResults } = req.body;

    if (!email || !firstname || !contractId) {
      return res.status(400).json({
        success: false,
        message: "Email, prénom et ID contrat requis",
      });
    }

    const result = await emailService.sendAnalysisCompleteEmail(
      email,
      firstname,
      contractTitle,
      contractId,
      analysisResults
    );

    res.json({
      success: true,
      message: "Email d'analyse envoyé avec succès",
      data: result,
    });
  } catch (error) {
    console.error("Erreur envoi email d'analyse:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi de l'email",
    });
  }
};

const sendTestEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email requis",
      });
    }

    const result = await emailService.sendTestEmail(email);

    res.json({
      success: true,
      message: "Email de test envoyé avec succès",
      data: result,
    });
  } catch (error) {
    console.error("Erreur envoi email de test:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de l'envoi de l'email de test",
    });
  }
};

module.exports = {
  sendWelcomeEmail,
  sendAnalysisCompleteEmail,
  sendTestEmail,
};