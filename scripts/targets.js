module.exports = [
    {
        name: "svelte",
        repo: "sveltejs/svelte",
        path: "/site",
        install: 'npm ci && npm run update'
    },
    {
        name: "svelte-native",
        repo: "halfnelson/svelte-native",
        path: "/docs_src",
        install: 'npm install'
    },
    {
        name: "sapper",
        repo: "sveltejs/sapper.svelte.technology",
        path: "",
        install: 'npm install'
    }
]