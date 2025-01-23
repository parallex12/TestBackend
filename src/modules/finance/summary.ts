import { FastifyInstance } from 'fastify';

const FinanceSummaryRoutes = async (app: FastifyInstance) => {
  app.get('/finance/summary', async (request, reply) => {
    // Mock finance summary data
    await request.jwtVerify();

    const mockFinanceSummary = {
      income: { amount: 1280, trend: 'up', percentageChange: 15 },
      expenses: { amount: 147.56, trend: 'down', percentageChange: -10 },
      taxes: { amount: 91.42, trend: 'up', percentageChange: 20 },
      invoices: { count: 30, trend: 'up', percentageChange: 20 },
    };

    return reply.send(mockFinanceSummary);
  });
};

export default FinanceSummaryRoutes;
