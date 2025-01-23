import { FastifyInstance } from 'fastify';

const ChartDataRoutes = async (app: FastifyInstance) => {
  app.get('/finance/chart-data', async (request, reply) => {
    const { type, timePeriod } = request.query as { type: string; timePeriod: string };
    await request.jwtVerify();

    // Mock chart data
    const mockChartData = {
      data: [
        { month: 'Jan', amount: 1000 },
        { month: 'Feb', amount: 2000 },
        { month: 'Mar', amount: 4000 },
      ],
    };

    return reply.send(mockChartData);
  });
};

export default ChartDataRoutes;
