import { FastifyInstance } from 'fastify';

const UserRoutes = async (app: FastifyInstance) => {
  app.get('/user', async (request, reply) => {
    // Mock user profile data
    // Validate JWT token
    await request.jwtVerify();
    const mockUserProfile = {
      userId: '12345',
      name: 'Farhan',
      avatarUrl: 'https://example.com/avatar.jpg',
    };

    return reply.send(mockUserProfile);
  });
};

export default UserRoutes;
