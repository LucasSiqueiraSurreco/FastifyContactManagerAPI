import Fastify from "fastify";
import { contactsRoutes } from "./routes/contact.routes";
import { userRoutes } from "./routes/user.routes";
const app = Fastify();

app.register(userRoutes, {
  prefix: "/users",
});
app.register(contactsRoutes, {
  prefix: "/contacts",
});

app.listen({ port: 3333 }, () => {
  console.log("http://localhost:3333");
});
