# Build stage
FROM node:24-slim AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.33.0 --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# Runtime stage
FROM ferronserver/ferron:2

COPY --from=builder /app/dist /var/www/ferron
COPY ferron.kdl /etc/ferron.kdl

EXPOSE 80
