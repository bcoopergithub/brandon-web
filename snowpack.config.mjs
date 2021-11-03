/** @type {import("snowpack").SnowpackUserConfig } */
process.env.REACT_APP_PEXEL_API = '563492ad6f917000010000019869fbe529ff4ddeaac743f7aee49eb9'
export default {
  mount: {
    // directory name: 'build directory'
    public: '/',
    src: '/src',
  },
  plugins: [
    '@snowpack/plugin-postcss',
    "@snowpack/plugin-react-refresh"
  ],
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
    knownEntrypoints:['has-symbols','react-transition-group/Transition'],
    hmr:true
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  env: {
    REACT_APP_PEXEL_API: '563492ad6f917000010000019869fbe529ff4ddeaac743f7aee49eb9',
  },
};
