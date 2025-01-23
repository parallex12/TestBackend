import { FastifyInstance } from "fastify";
import AuthRoutes from "../modules/auth";
import UserRoutes from "../modules/user";
import FinanceSummaryRoutes from "../modules/finance/summary";
import InvoiceRoutes from "../modules/invoice";
import ChartDataRoutes from "../modules/finance/chartData";
import BankAccountRoutes from "../modules/finance/bankAccount";

const AppRoutes = (app: FastifyInstance) => {
  AuthRoutes(app)
  UserRoutes(app)
  FinanceSummaryRoutes(app)
  ChartDataRoutes(app)
  BankAccountRoutes(app)
  InvoiceRoutes(app)
  app.get("/", async (request, reply) => {
    reply.send({ message: "API is running" });
  });
}

export default AppRoutes