import { FastifyRequest, FastifyReply } from "fastify";

export const AuthMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
  const token = request.headers["authorization"];
  if (!token) {
    reply.status(401).send({ error: "Unauthorized" });
  }
  // Verify token logic here
};