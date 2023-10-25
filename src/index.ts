import { Elysia } from "elysia";

// const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

const app = new Elysia()
  .get("/", () => 'Hello, bingus wingus!')
  .post("/", (req) => {
    return req.body;
  })
  .listen(80);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
