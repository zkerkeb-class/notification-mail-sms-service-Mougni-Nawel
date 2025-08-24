const nodemailer = require('nodemailer');
const emailService = require('../../src/services/email.service');

jest.mock('../../src/templates/email.template', () => ({
  generateWelcomeTemplate: jest.fn().mockReturnValue('<html>Mock Welcome</html>'),
  generateAnalysisCompleteTemplate: jest.fn().mockReturnValue('<html>Mock Analysis</html>')
}));

describe('EmailService', () => {
  let mockTransporter;

  beforeAll(() => {
    process.env.SMTP_USER = 'test@example.com';
    process.env.SMTP_PASS = 'password';
    process.env.SMTP_FROM = 'noreply@contractai.com';
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
  });

  beforeEach(() => {
    mockTransporter = {
      sendMail: jest.fn().mockImplementation((mailOptions, callback) => {
        if (typeof callback === 'function') {
          callback(null, { messageId: 'mock-message-id' });
        }
        return Promise.resolve({ messageId: 'mock-message-id' });
      })
    };

    nodemailer.createTransport = jest.fn().mockReturnValue(mockTransporter);
    emailService.setTransporter(mockTransporter);
  });

  describe('sendEmail', () => {
    it('devrait envoyer un email avec les bonnes options', async () => {
      const mailOptions = {
        to: 'recipient@example.com',
        subject: 'Test',
        html: '<p>Test</p>'
      };

      const result = await emailService.sendEmail(mailOptions);

      expect(mockTransporter.sendMail).toHaveBeenCalledWith(mailOptions);
      expect(result).toEqual({
        success: true,
        messageId: 'mock-message-id',
        recipient: 'recipient@example.com'
      });
    });

    it('devrait gérer les erreurs d\'envoi', async () => {
      mockTransporter.sendMail.mockRejectedValueOnce(new Error('SMTP Error'));
      await expect(emailService.sendEmail({})).rejects.toThrow('SMTP Error');
    });
  });



  describe('sendAnalysisCompleteEmail', () => {
    

    it('devrait utiliser "Votre contrat" si le titre est manquant', async () => {
      await emailService.sendAnalysisCompleteEmail(
        'test@example.com',
        'Jean',
        null,
        '123',
        {}
      );

      expect(mockTransporter.sendMail).toHaveBeenCalledWith(
        expect.objectContaining({
          subject: 'Analyse terminée : Votre contrat 📋'
        })
      );
    });
  });

  describe('sendTestEmail', () => {
    it('devrait envoyer un email de test avec le timestamp', async () => {
      const now = new Date().toISOString();
      await emailService.sendTestEmail('test@example.com');

      const sentHtml = mockTransporter.sendMail.mock.calls[0][0].html;
      expect(sentHtml).toContain(now.substring(0, 10));
    });
  });
});