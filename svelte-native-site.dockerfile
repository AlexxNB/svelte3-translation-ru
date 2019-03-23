#### BUILDING svelte-native-site
FROM node:lts-alpine as build-svelte-native-site

COPY repositories/halfnelson/svelte-native/docs_src /translation

RUN apk add subversion \
 && apk add git \
 && svn export -q https://github.com/halfnelson/svelte-native/trunk/docs_src /web \
 && cp -r /translation/* /web \
 && cd /web \
 && npm install


#### PACKING svelte-native-site
FROM node:lts-alpine as svelte-native-site
COPY --from=build-svelte-native-site /web /svelte-native-site

WORKDIR /svelte-native-site
EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]