// src/index.ts
import dotenv from "dotenv";
import Fastify from 'fastify';
import AppRoutes from "./routes";

dotenv.config();

const app = Fastify({ logger: true });
const port = process.env.PORT || 3000;
// Register fastify-jwt
if (process.env.JWT_SECRET) {
    app.register(import("@fastify/jwt"), {
        secret: process.env.JWT_SECRET, // Replace with a secret key or use environment variables
    });
}

AppRoutes(app)

app.listen({ port: Number(port) }, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});