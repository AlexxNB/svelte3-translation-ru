FROM node:lts-alpine as build

ADD package.json /src/
ADD repositories /src/repositories/
ADD scripts /src/scripts/

WORKDIR /src

RUN apk add git \
 && npm install \
 && npm run update-sapper \
 && npm run build-sapper 

FROM node:lts-alpine as production

COPY --from=build /src/__sapper/site/__sapper__/export .

EXPOSE 3000

ENTRYPOINT ["npx", "serve", "-l", "3000", "."]