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
const AuthRoutes = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.post('/auth/login', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = request.body;
        // Mock user data
        const mockUser = {
            email: 'user@test.com',
            password: '12345678',
            userId: '12345',
        };
        const token = app.jwt.sign({ username: mockUser.userId });
        if (email === mockUser.email && password === mockUser.password) {
            return reply.send({
                token: 'mock-jwt-token',
                userId: token,
            });
        }
        return reply.status(401).send({ error: 'Invalid credentials' });
    }));
});
exports.default = AuthRoutes;
