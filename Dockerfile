#### BUILDING svelte-site
FROM node:lts-alpine as build-svelte-site

COPY repositories/sveltejs/svelte/site /translation

RUN apk add subversion \
 && apk add git \
 && svn export -q https://github.com/sveltejs/svelte/trunk/site /web \
 && cp -r /translation/* /web \
 && cd /web \
 && npm install -D locate-character \
 && npm ci \
 && npm run update


#### PACKING svelte-site
FROM node:lts-alpine as svelte-site
COPY --from=build-svelte-site /web /svelte-site

WORKDIR /svelte-site
EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]