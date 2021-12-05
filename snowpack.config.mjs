/** @type {import("snowpack").SnowpackUserConfig } */
process.env.REACT_APP_UNSPLASH_API = 'kNUvQVzWIhv7EFvV5KAkfGVvYqOArGj0K0hc67VAAJk';
export default {
    mount: {
        // directory name: 'build directory'
        public: '/',
        src: '/src',
    },
    plugins: ['@snowpack/plugin-postcss', '@snowpack/plugin-react-refresh'],
    routes: [
        /* Enable an SPA Fallback in development: */
        { match: 'all', src: '/api/.*', dest: (req, res) => proxy.web(req, res) },
        { match: 'routes', src: '.*', dest: '/index.html' },
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        tailwindConfig: './tailwind.config.js',
        open: 'none',
        knownEntrypoints: ['has-symbols', 'react-transition-group/Transition'],
        hmr: true,
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
    env: {
        REACT_APP_UNSPLASH_API: 'kNUvQVzWIhv7EFvV5KAkfGVvYqOArGj0K0hc67VAAJk',
    },
};
