FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS build
RUN pnpm install
RUN pnpm run build

FROM base 
COPY --from=build /app/dist /app/dist
EXPOSE 3001

# NOTE: This is only in dev not for prod must use nginx for that
CMD [ "pnpm", "run", "dev" ]
