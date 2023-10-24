import { Elysia } from "elysia";

// const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

const app = new Elysia()
  .post("/", (req) => {
    return req.body;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
