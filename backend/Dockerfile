FROM node:24.14-alpine AS base
RUN npm install -g pnpm
WORKDIR /app

FROM base AS deps
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY backend/package.json ./backend/package.json
COPY frontend/package.json ./frontend/package.json
RUN pnpm install --frozen-lockfile

FROM base AS build
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm --filter backend run build

FROM build AS prod-deps
RUN pnpm --filter backend deploy --prod --legacy /prod/backend

FROM node:24.14-alpine
WORKDIR /app
COPY --from=prod-deps /prod/backend ./
COPY --from=build /app/backend/dist ./dist
EXPOSE 3000

CMD ["node", "dist/main"]