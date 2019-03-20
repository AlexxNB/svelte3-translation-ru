FROM node:alpine as build

RUN apk add git \
 && npm install -g degit \
 && mkdir svelte && mkdir translation \
 && degit sveltejs/svelte svelte \
 && degit AlexxNB/svelte3-translation-ru translation \
 && mv svelte/site /web \
 && cp -r translation/repositories/sveltejs/svelte/site/* /web \
 && cd /web \
 && npm install -D locate-character \
 && npm ci \
 && npm run update


FROM node:alpine as svelte-site
COPY --from=build /web /site

WORKDIR /site
EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]