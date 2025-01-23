import { FastifyInstance } from 'fastify';

const BankAccountRoutes = async (app: FastifyInstance) => {
  app.get('/bank-account', async (request, reply) => {
    // Mock bank account data
    await request.jwtVerify();

    const mockBankAccount = {
      accountName: 'BBVA',
      currentBalance: 40206.2,
      accountNumber: '****5678',
    };

    return reply.send(mockBankAccount);
  });
};

export default BankAccountRoutes;
