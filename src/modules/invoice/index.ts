import { FastifyInstance } from 'fastify';

const InvoiceRoutes = async (app: FastifyInstance) => {
  app.get('/invoices', async (request, reply) => {
    const { timePeriod } = request.query as { timePeriod: string };
    await request.jwtVerify();

    // Mock invoice data
    const mockInvoices = {
      totalInvoices: 30,
      invoiceList: [
        { id: 1, amount: 100, status: 'paid' },
        { id: 2, amount: 200, status: 'pending' },
      ],
    };

    return reply.send(mockInvoices);
  });
};

export default InvoiceRoutes;
