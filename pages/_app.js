import Head from 'next/head';
import {useEffect, useRef} from 'react';

// Sentry
import * as Sentry from '@sentry/browser';

// Styled-components injections
import styled, { ThemeProvider } from 'styled-components';
import LoadingOverlay from '~/components/loadingOverlay';
import { AppProvider } from '~/providers/AppProvider';
import GlobalStyle from '../src/styles/globalStyles';
import getConfig from "next/config";


const { publicRuntimeConfig: {NODE_ENV, SENTRY_DSN} } = getConfig();

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    enabled: true,
    dsn: SENTRY_DSN,
    maxBreadcrumbs: 50,
    attachStacktrace: true,
  });
}

// Global theme variables
const theme = {
  primaryFont: '"Poppins", sans-serif',
  greenColor: '#0CC8A8',
  lighterGreenColor: '#4BC3C3',
  greyColor: '#A2AAAC',
  redColor: '#E15454',
  lightRedColor: '#ED6868',
  pinkColor: '#FFE1E1',
  yellowColor: '#FDCB54',
  linkColor: 'black',
  linkHoverColor: 'white',
  onboardingBg: '#F2F5F6',
  maxWidth: '600px',
  maxHeight: '800px',
  maxWidthWithoutPadding: '540px',
  topbarHeight: '55px',
  navbarHeightDesktop: '110px',
  navbarHeight: '74.5px',
  bottomNavigationHeight: '52px',
  bottomNavigationHeightDesktop: '85px',
};

function MyApp({ Component, pageProps, err }) {
  const langProps = {
    clientLang: 'en',
    locale: 'en',
    lang: 'en',
  };

  const button = useRef();

  useEffect(() => {
    if (NODE_ENV === 'production') {
      Sentry.init({ dsn: SENTRY_DSN });
    }
  }, [])

  try {
    return (
        <>
          <Head>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
            />
            <link rel='manifest' href='/manifest.json' />
            <link
                rel='apple-touch-icon'
                sizes='180x180'
                href='/icons/apple-touch-icon.png'
            />
            <link rel='icon' type='image/png' href='/favicon.ico' />
            <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/icons/favicon-32x32.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/icons/favicon-16x16.png'
            />
            <meta name='theme-color' content='#ffffff' />
          </Head>
          <AppProvider {...langProps}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <LoadingOverlay>
                <AppWrapper>
                  <Component {...pageProps} err={err} />
                </AppWrapper>
              </LoadingOverlay>
            </ThemeProvider>
          </AppProvider>
        </>
    );
  } catch (e) {
    Sentry.captureException(e);
    return <>${e}</>;
  }
}

export default MyApp;

export {theme}

const AppWrapper = styled.div`
    position: relative;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
`;