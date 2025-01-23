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
const UserRoutes = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.get('/user', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        // Mock user profile data
        // Validate JWT token
        yield request.jwtVerify();
        const mockUserProfile = {
            userId: '12345',
            name: 'Farhan',
            avatarUrl: 'https://example.com/avatar.jpg',
        };
        return reply.send(mockUserProfile);
    }));
});
exports.default = UserRoutes;
