import { config } from "./config.js";
import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";

const app = Fastify({ logger: true });

// Middleware
await app.register(cors);
await app.register(helmet);

// Routes
app.get<{
  Querystring: { name?: string };
}>("/", async (request) => {
  const { name } = request.query;
  return { pong: true, hello: name ?? "world" };
});

try {
  await app.listen({ port: config.port, host: config.host });
  console.log(`Server listening at http://localhost:${config.port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
