import { FastifyInstance } from "fastify";
import AuthRoutes from "../modules/auth";
import UserRoutes from "../modules/user";
import FinanceSummaryRoutes from "../modules/finance/summary";
import InvoiceRoutes from "../modules/invoice";

const AppRoutes = (app: FastifyInstance) => {
  AuthRoutes(app)
  UserRoutes(app)
  FinanceSummaryRoutes(app)
  InvoiceRoutes(app)
  app.get("/", async (request, reply) => {
    reply.send({ message: "API is running" });
  });
}

export default AppRoutes