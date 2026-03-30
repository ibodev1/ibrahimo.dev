# ================================
# Stage 1: Build
# ================================
FROM node:24-slim AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.33.0 --activate

WORKDIR /app

# Copy lockfile + manifest first (layer cache for deps)
COPY package.json pnpm-lock.yaml ./

# Install all deps (build needs devDeps too)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build static site -> dist/
RUN pnpm run build

# ================================
# Stage 2: Runtime
# ================================
FROM node:24-slim AS runner

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.33.0 --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install only prod deps (astro preview needs astro itself)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --prod

# Copy built output from builder stage
COPY --from=builder /app/dist ./dist

EXPOSE 4321

CMD ["pnpm", "run", "start"]
