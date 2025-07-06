const nodemailer = require("nodemailer");
const { generateWelcomeTemplate, generateAnalysisCompleteTemplate } = require("../templates/email.template");

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendEmail(mailOptions) {
    try {
      const info = await this.transporter.sendMail(mailOptions);
      return {
        success: true,
        messageId: info.messageId,
        recipient: mailOptions.to,
      };
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      throw error;
    }
  }

  async sendWelcomeEmail(email, firstname, lastname) {
    const mailOptions = {
      from: `"ContractAnalyzer" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: "Bienvenue sur ContractAnalyzer ✨",
      html: generateWelcomeTemplate(firstname, lastname),
    };

    return this.sendEmail(mailOptions);
  }

  async sendAnalysisCompleteEmail(email, firstname, contractTitle, contractId, analysisResults) {
    const mailOptions = {
      from: `"ContractAnalyzer" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: `Analyse terminée : ${contractTitle || "Votre contrat"} 📋`,
      html: generateAnalysisCompleteTemplate(firstname, contractTitle, contractId, analysisResults),
    };

    return this.sendEmail(mailOptions);
  }

  async sendTestEmail(email) {
    const mailOptions = {
      from: `"ContractAnalyzer" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: "Test Email - ContractAnalyzer",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Test Email</h2>
          <p>Ceci est un email de test du service de notification ContractAnalyzer.</p>
          <p>Timestamp: ${new Date().toISOString()}</p>
        </div>
      `,
    };

    return this.sendEmail(mailOptions);
  }
}

module.exports = new EmailService();