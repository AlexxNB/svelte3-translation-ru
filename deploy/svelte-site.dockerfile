FROM node:12-alpine

ARG GITHUB_CLIENT_ID=not_set
ARG GITHUB_CLIENT_SECRET=not_set
ARG PGUSER=not_set
ARG PGHOST=not_set
ARG PGDATABASE=not_set
ARG PGPASSWORD=not_set
ARG PGPORT=not_set
ARG MAPBOX_ACCESS_TOKEN=not_set

ENV GITHUB_CLIENT_ID="${GITHUB_CLIENT_ID}"
ENV GITHUB_CLIENT_SECRET="${GITHUB_CLIENT_SECRET}"
ENV PGUSER="${PGUSER}"
ENV PGDATABASE="${PGDATABASE}"
ENV PGHOST="${PGHOST}"
ENV PGPORT="${PGPORT}"
ENV PGPASSWORD="${PGPASSWORD}"
ENV MAPBOX_ACCESS_TOKEN="${MAPBOX_ACCESS_TOKEN}"

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