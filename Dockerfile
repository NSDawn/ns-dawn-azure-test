FROM oven/bun:latest
COPY . .
EXPOSE 80
RUN bun install --production
ENTRYPOINT ["bun", "run", "dev"]
