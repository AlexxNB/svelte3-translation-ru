FROM node:15-alpine
ARG MAPBOX_ACCESS_TOKEN=not_set
ENV MAPBOX_ACCESS_TOKEN="${MAPBOX_ACCESS_TOKEN}"

ADD package.json /src/
ADD repositories /src/repositories/
ADD scripts /src/scripts/

WORKDIR /src

RUN apk add git \
 && npm install \
 && npm run update-svelte \
 && cd __svelte/site && npm install pg@8.6.0 && cd ../.. \
 && npm run build-svelte \
 && rm -rf repositories

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start-svelte"]