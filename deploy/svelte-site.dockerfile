FROM node:15-alpine
ARG MAPBOX_ACCESS_TOKEN=not_set
ENV MAPBOX_ACCESS_TOKEN="${MAPBOX_ACCESS_TOKEN}"
ENV GITHUB_CLIENT_ID="${GITHUB_CLIENT_ID}"
ENV GITHUB_CLIENT_SECRET="${GITHUB_CLIENT_SECRET}"
ENV PGHOST="${PGHOST}"
ENV PGUSER="${PGUSER}"
ENV PGPASSWORD="${PGPASSWORD}"
ENV PGDATABASE="${PGDATABASE}"

ADD package.json /src/
ADD repositories /src/repositories/
ADD scripts /src/scripts/

WORKDIR /src

RUN apk add git \
 && npm install \
 && npm run update-svelte \
 && npm run build-svelte \
 && rm -rf repositories

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start-svelte"]