FROM oven/bun:latest
COPY . .
EXPOSE 3000
RUN bun install --production
ENTRYPOINT ["bun", "run", "dev"]
