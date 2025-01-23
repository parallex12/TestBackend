import { FastifyReply, FastifyRequest } from "fastify";
import { ZodSchema } from "zod";

export const ValidateRequest = (schema: ZodSchema) => async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    schema.parse(request.body);
  } catch (err) {
    reply.status(400).send({ error: "Validation error", details: err });
  }
};
