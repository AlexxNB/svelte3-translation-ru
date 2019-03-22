FROM node:lts-alpine as build-svelte-site

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


FROM node:lts-alpine as svelte-site
COPY --from=buildsvelte-site /web /site

WORKDIR /site
EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]