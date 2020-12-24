import { createContext, useEffect, useState } from 'react';
import { defaultLanguage } from '~/providers/langProvider/langUtils';
import { i18n } from '@lingui/core';
import catalogEN from '~/locales/en/messages';
import catalogCS from '~/locales/cs/messages';
import { I18nProvider } from '@lingui/react';

const AppContext = createContext({
    state: {
        online: true,
        loading: false,
        lang: defaultLanguage
    },
    actions: {
        setOnline: () => null,
        setLang: () => null,
        setLoading: () => null
    },
});

const AppProvider = ({ children, clientLang }) => {
    const [online, setOnline] = useState(true);
    const [loading, setLoading] = useState(false);
    const [lang, setLang] = useState(clientLang);

    i18n.loadLocaleData('en', {});
    i18n.load({
        en: catalogEN.messages,
        cs: catalogCS.messages,
    });
    i18n.activate(lang);

    const handleOfflineMode = () => {
        setOnline(false);
    };

    const handleOnlineMode = () => {
        setOnline(true);
    };

    useEffect(() => {
        setOnline(window.navigator?.onLine);

        window.addEventListener('offline', handleOfflineMode);
        window.addEventListener('online', handleOnlineMode);

        setLang(localStorage.getItem('language') || 'en')

        return function cleanup() {
            window.removeEventListener('offline', handleOfflineMode);
            window.removeEventListener('online', handleOnlineMode);
        };
    }, []);

    return (
        <I18nProvider i18n={i18n}>
            <AppContext.Provider
                value={{
                    state: {
                        online: online,
                        lang: lang,
                        loading: loading
                    },
                    actions: {
                        setOnline: setOnline,
                        setLang: setLang,
                        setLoading: setLoading,
                    },
                }}>
                {children}
            </AppContext.Provider>
        </I18nProvider>
    );
};

export { AppContext, AppProvider };
