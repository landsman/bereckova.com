//
// dependencies
//
const locale = require('locale');

//
// constants
//
const defaultLanguage = 'en'; // @todo: fallback lingui locale would be same with this

//
// @todo: load catalogs items by added locales dynamically
//
const supportedLangs = ['cs', 'en'];

const languageNames = {
    cs: 'Čeština',
    en: 'English'
};

const isoLanguages = {
    cs: 'cs_CZ',
    en: 'en_US'
};

/**
 * Util function for create regular expression for Express server routing
 *
 * @param langs
 * @returns {string}
 */
const getSuppLangsReFragment = langs => {
    const all = langs.reduce((acc, e, i) => {
        if (i + 1 === langs.length) {
            return acc + e;
        } else {
            return acc + e + '|';
        }
    }, '');

    return '(' + all + ')';
};

/**
 * Util function for search paths between slashes in URL address
 *
 * @param route
 * @returns {[]}
 */
function findVariablesInRoute(route) {
    let items = route.split('/');
    let dynamic = [];

    items.forEach(item => {
        if (item.includes(':')) {
            dynamic.push(item.replace(':', ''));
        }
    });

    return dynamic;
}

/**
 * Util function for remove last slash from URL address
 * This case is for language switching in SPA (on client-side).
 *
 * @param str
 * @returns {string|*}
 */
function stripTrailingSlash(str) {
    if (str.substr(-1) === '/') {
        return str.substr(0, str.length - 1);
    }
    return str;
}

/**
 * Create dynamic alias from route based on current address data.
 * This case is for language switching in SPA (on client-side).
 *
 * @param lang
 * @param route
 * @param query
 * @returns {*|string}
 */
function composeAddress(lang, route, query) {
    const dynamic = findVariablesInRoute(route);
    let parsed = new URLSearchParams(query);

    // Hot fix for getting right query param on lang change
    const queryValue = query.split('=')[2];
    let url = `/${lang}${route}${queryValue ? queryValue : ''}`;

    dynamic.forEach(part => {
        if (parsed.has(part)) {
            url += parsed.get(part);
            url += '/';
        }
    });

    url = stripTrailingSlash(url);

    return url;
}

/**
 * URL without language prefix would be redirected to localized address
 *
 * @param url
 * @returns {boolean}
 */
function haveToBeRedirected(url) {
    // framework folder
    if (url.startsWith('_next')) {
        return false;
    }

    // static assets folder
    if (url.startsWith('/static')) {
        return false;
    }

    // api
    if (url.startsWith('/api')) {
        return false;
    }

    return supportedLangs.every(lang => !url.startsWith(`/${lang}`));
}

/**
 * Check browser language and determine
 * final language based on our supported
 *
 * @param req
 * @returns {string}
 */
function decideLangFromPreference(req) {
    const sample = new locale.Locales(supportedLangs, defaultLanguage);
    const browser = new locale.Locales(req.headers['accept-language']);

    return browser.best(sample).toString();
}

/**
 * For URLs without language prefix we would detect language and return
 * address with prefix. like: domain.tld/ => domain.tld./cs/
 *
 * @param req
 * @returns {string}
 */
function locationWithLangPrefix(req) {
    let lang;

    if (req.headers.cookie) {
        if (req.cookies.lang && supportedLangs.includes(req.cookies.lang)) {
            lang = req.cookies.lang;
        } else {
            lang = decideLangFromPreference(req);
        }
    } else {
        lang = decideLangFromPreference(req);
    }

    return `/${lang}${req.url}`;
}

/**
 * Determine client language from Next.js routing - our alias address
 *
 * @param asPath
 * @returns {string}
 */
function determineClientLanguage(asPath) {
    let clientLang = defaultLanguage;
    if (asPath) {
        clientLang = asPath.substr(1, 2);
    }

    if (!supportedLangs.includes(clientLang)) {
        clientLang = defaultLanguage;
    }

    return clientLang;
}

module.exports.languageNames = languageNames;
module.exports.supportedLangs = supportedLangs;
module.exports.isoLanguages = isoLanguages;
module.exports.defaultLanguage = defaultLanguage;
module.exports.getSuppLangsReFragment = getSuppLangsReFragment;
module.exports.composeAddress = composeAddress;
module.exports.haveToBeRedirected = haveToBeRedirected;
module.exports.locationWithLangPrefix = locationWithLangPrefix;
module.exports.determineClientLanguage = determineClientLanguage;
