module.exports = [
    {
        name: "svelte",
        repo: "sveltejs/svelte",
        path: "/site",
        install: 'npm ci && npm run update',
        build: 'npm run sapper',
        static: false
    },
    {
        name: "svelte-native",
        repo: "halfnelson/svelte-native",
        path: "/docs_src",
        install: 'npm install',
        build: 'npm run build',
        static: false
    },
    {
        name: "sapper",
        repo: "sveltejs/sapper.svelte.technology",
        path: "",
        install: 'npm install',
        build: 'npm run build',
        static: true
    }
]