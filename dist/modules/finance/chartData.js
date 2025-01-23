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
const ChartDataRoutes = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.get('/finance/chart-data', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const { type, timePeriod } = request.query;
        yield request.jwtVerify();
        // Mock chart data
        const mockChartData = {
            data: [
                { month: 'Jan', amount: 1000 },
                { month: 'Feb', amount: 2000 },
                { month: 'Mar', amount: 4000 },
            ],
        };
        return reply.send(mockChartData);
    }));
});
exports.default = ChartDataRoutes;
