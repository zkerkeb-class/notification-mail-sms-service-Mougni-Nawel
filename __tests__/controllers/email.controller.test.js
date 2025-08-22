const emailController = require('../../src/controllers/email.controller');
const emailService = require('../../src/services/email.service');

jest.mock('../../src/services/email.service', () => ({
  sendWelcomeEmail: jest.fn(),
  sendAnalysisCompleteEmail: jest.fn(),
  sendTestEmail: jest.fn()
}));

describe('Email Controller', () => {
  let mockRequest, mockResponse;

  beforeEach(() => {
    mockRequest = {
      body: {}
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    emailService.sendWelcomeEmail.mockReset();
    emailService.sendAnalysisCompleteEmail.mockReset();
    emailService.sendTestEmail.mockReset();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('sendWelcomeEmail', () => {
    it('devrait retourner une erreur 400 si email ou prénom manquant', async () => {
      await emailController.sendWelcomeEmail(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        message: "Email et prénom requis"
      });

      mockRequest.body.email = 'test@example.com';
      await emailController.sendWelcomeEmail(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
    });

    it('devrait appeler le service email avec les bons paramètres', async () => {
      mockRequest.body = {
        email: 'test@example.com',
        firstname: 'Jean',
        lastname: 'Dupont'
      };

      emailService.sendWelcomeEmail.mockResolvedValue({ success: true });

      await emailController.sendWelcomeEmail(mockRequest, mockResponse);

      expect(emailService.sendWelcomeEmail).toHaveBeenCalledWith(
        'test@example.com',
        'Jean',
        'Dupont'
      );
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        message: "Email de bienvenue envoyé avec succès",
        data: { success: true }
      });
    });

    it('devrait gérer les erreurs du service email', async () => {
      mockRequest.body = {
        email: 'test@example.com',
        firstname: 'Jean'
      };

      emailService.sendWelcomeEmail.mockRejectedValue(new Error('Erreur SMTP'));

      await emailController.sendWelcomeEmail(mockRequest, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: false,
        message: "Erreur lors de l'envoi de l'email"
      });
    });
  });

  describe('sendAnalysisCompleteEmail', () => {
    it('devrait retourner une erreur 400 si paramètres requis manquants', async () => {
      mockRequest.body = {
        firstname: 'Jean',
        contractId: '123'
      };
      await emailController.sendAnalysisCompleteEmail(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(400);

      mockRequest.body = {
        email: 'test@example.com',
        contractId: '123'
      };
      await emailController.sendAnalysisCompleteEmail(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(400);

      mockRequest.body = {
        email: 'test@example.com',
        firstname: 'Jean'
      };
      await emailController.sendAnalysisCompleteEmail(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
    });

    it('devrait appeler le service avec tous les paramètres', async () => {
      mockRequest.body = {
        email: 'test@example.com',
        firstname: 'Jean',
        contractId: '123',
        contractTitle: 'Contrat important',
        analysisResults: { score: 85 }
      };

      emailService.sendAnalysisCompleteEmail.mockResolvedValue({ success: true });

      await emailController.sendAnalysisCompleteEmail(mockRequest, mockResponse);

      expect(emailService.sendAnalysisCompleteEmail).toHaveBeenCalledWith(
        'test@example.com',
        'Jean',
        'Contrat important',
        '123',
        { score: 85 }
      );
    });
  });

  describe('sendTestEmail', () => {
    it('devrait retourner une erreur 400 si email manquant', async () => {
      await emailController.sendTestEmail(mockRequest, mockResponse);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
    });

    it('devrait envoyer un email de test', async () => {
      mockRequest.body = { email: 'test@example.com' };
      emailService.sendTestEmail.mockResolvedValue({ success: true });

      await emailController.sendTestEmail(mockRequest, mockResponse);

      expect(emailService.sendTestEmail).toHaveBeenCalledWith('test@example.com');
      expect(mockResponse.json).toHaveBeenCalledWith({
        success: true,
        message: "Email de test envoyé avec succès",
        data: { success: true }
      });
    });
  });
});