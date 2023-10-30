import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify({ logger: true });

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log("http://localhost:3333");
  }
);
