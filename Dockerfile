FROM oven/bun:latest
COPY . .
ENV PORT=80
EXPOSE $PORT
RUN bun install --production
ENTRYPOINT ["bun", "run", "dev"]
