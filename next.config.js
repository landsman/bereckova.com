const withPWA = require('next-pwa');
require('dotenv').config();

module.exports = (withPWA({
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL,
        DEV_MODE: process.env.DEV_MOD,
        SENTRY_DSN: process.env.SENTRY_DSN,
        GTM: process.env.GTM,
        FORM: {
            CONTACT: ''
        },
    },
    serverRuntimeConfig: {
    },
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        swSrc: 'src/service-worker.js',
    },
    devIndicators: {
        autoPrerender: false,
    },
    poweredByHeader: 'landsman@studioart.cz',
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = { fs: 'empty' };
        }
        return config;
    },
}));