FROM node:lts-alpine

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