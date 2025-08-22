const request = require('supertest');
const express = require('express');

jest.mock('../../src/controllers/email.controller', () => ({
  sendWelcomeEmail: (req, res) => res.status(200).json({ success: true }),
  sendAnalysisCompleteEmail: (req, res) => res.status(200).json({ success: true }),
  sendTestEmail: (req, res) => res.status(200).json({ success: true })
}));


const emailRouter = require('../../src/routes/email.route');

describe('Email Router', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/email', emailRouter);
  });

it('devrait définir la route POST /welcome', async () => {
  const response = await request(app)
    .post('/email/welcome')
    .send({ email: 'test@example.com', firstname: 'Jean' });
  
  expect(response.statusCode).toBe(200);
});

  it('devrait définir la route POST /analysis-complete', async () => {
    const response = await request(app)
      .post('/email/analysis-complete')
      .send({ email: 'test@example.com', firstname: 'Jean', contractId: '123' });

    expect(response.statusCode).toBe(200);
  });

  it('devrait définir la route POST /test', async () => {
    const response = await request(app)
      .post('/email/test')
      .send({ email: 'test@example.com' });

    expect(response.statusCode).toBe(200);
  });
});