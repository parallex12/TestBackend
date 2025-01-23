"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const FinanceSummaryRoutes = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.get('/finance/summary', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // Mock finance summary data
        yield request.jwtVerify();
        const mockFinanceSummary = {
            income: { amount: 1280, trend: 'up', percentageChange: 15 },
            expenses: { amount: 147.56, trend: 'down', percentageChange: -10 },
            taxes: { amount: 91.42, trend: 'up', percentageChange: 20 },
            invoices: { count: 30, trend: 'up', percentageChange: 20 },
        };
        return reply.send(mockFinanceSummary);
    }));
});
exports.default = FinanceSummaryRoutes;
