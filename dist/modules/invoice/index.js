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
const InvoiceRoutes = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.get('/invoices', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const { timePeriod } = request.query;
        yield request.jwtVerify();
        // Mock invoice data
        const mockInvoices = {
            totalInvoices: 30,
            invoiceList: [
                { id: 1, amount: 100, status: 'paid' },
                { id: 2, amount: 200, status: 'pending' },
            ],
        };
        return reply.send(mockInvoices);
    }));
});
exports.default = InvoiceRoutes;
