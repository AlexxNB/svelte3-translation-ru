FROM node:lts-alpine as build
ARG MAPBOX_ACCESS_TOKEN=not_set
ENV MAPBOX_ACCESS_TOKEN="${MAPBOX_ACCESS_TOKEN}"

ADD package.json /src/
ADD repositories /src/repositories/
ADD scripts /src/scripts/

WORKDIR /src

RUN apk add git \
 && npm install \
 && npm run update-svelte \
 && npm run build-svelte 


FROM node:lts-alpine as production

COPY --from=build /src/__svelte/site/__sapper__/build .

EXPOSE 3000

ENTRYPOINT ["node", "."]