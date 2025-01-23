import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { logger } from "../utils/logger.js";

export const ErrorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
  logger.error(error);
  reply.status(500).send({ error: "Something went wrong" });
};