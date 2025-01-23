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
const BankAccountRoutes = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.get('/bank-account', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // Mock bank account data
        yield request.jwtVerify();
        const mockBankAccount = {
            accountName: 'BBVA',
            currentBalance: 40206.2,
            accountNumber: '****5678',
        };
        return reply.send(mockBankAccount);
    }));
});
exports.default = BankAccountRoutes;
