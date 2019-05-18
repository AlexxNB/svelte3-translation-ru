module.exports = [
    {
        name: "svelte",
        repo: "sveltejs/svelte",
        path: "/site",
        install: 'npm install && npm run update',
        build: 'npm run sapper',
        static: false
    },
    {
        name: "svelte-native",
        repo: "halfnelson/svelte-native",
        path: "/docs_src",
        install: 'npm install',
        build: 'npm run build',
        static: true
    },
    {
        name: "sapper",
        repo: "sveltejs/sapper",
        path: "/site",
        install: 'npm install',
        build: 'npm run export',
        static: true
    }
]