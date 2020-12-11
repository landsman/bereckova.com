require('dotenv').config();

const config = {
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
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = { fs: 'empty' };
        }
        return config;
    },
};

module.exports = config;