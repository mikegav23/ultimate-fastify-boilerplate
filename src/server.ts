import "dotenv/config";
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

// Get port from .env and start server
const port = Number(process.env.PORT) || 3000;

try {
  await app.listen({ port, host: "0.0.0.0" });
  console.log(`Server listening at http://localhost:${port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
