import { FastifyInstance } from 'fastify';

const AuthRoutes = async (app: FastifyInstance) => {
    app.post('/auth/login', async (request, reply) => {
        if (!request.body) return reply.status(400).send({ error: 'Invalid request' });
        const { email, password } = request.body as { email: string; password: string };

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
    });
};

export default AuthRoutes;
