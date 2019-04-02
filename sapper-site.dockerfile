#### BUILDING sapper-site
FROM node:lts-alpine as build-sapper-site

COPY repositories/sveltejs/sapper.svelte.technology /translation

RUN apk add subversion \
 && apk add git \
 && svn export -q  svn export -q https://github.com/sveltejs/sapper.svelte.technology/trunk /web \
 && cp -r /translation/* /web \
 && cd /web \
 && npm install


#### PACKING sapper-site
FROM node:lts-alpine as sapper-site
COPY --from=build-sapper-site /web /sapper-site

WORKDIR /sapper-site
EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]