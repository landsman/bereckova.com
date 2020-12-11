import React from "react";
import App from 'next/app';
import { saveInvite } from '~/components/marketing/referral';
import { saveUTMParams } from '~/components/marketing/UTMParams';
import AlertForIE from '~/components/legacy/alertForIE';
import * as Sentry from '@sentry/browser';
import getConfig from 'next/config';
import GlobalStyle from '~/styles/globalStyles';

const { publicRuntimeConfig } = getConfig();

export default class extends App {
  static async getInitialProps({ ctx, Component }) {
    // manually call getInitialProps on child component (just in case the page component is using it)
    const userAgent = ctx && ctx.req ? ctx.req.headers['user-agent'] : '';
    const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    return { pageProps, userAgent };
  }

  constructor(props) {
    super(props);
    Sentry.init({ dsn: publicRuntimeConfig.SENTRY_DSN });
  }

  componentDidCatch(error, errorInfo) {
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
    });
    Sentry.captureException(error);

    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }

  componentDidMount() {
    saveInvite();
    saveUTMParams();
  }

  render() {
    const { Component, pageProps, userAgent } = this.props;
    return (
        <>
          <AlertForIE ua={userAgent}>
            <>
                Bohužel Internet Explorer nepodporujeme,
                doporučujeme stáhnout některý modernější prohlížeč:
              {' '}
              <a target={'_blank'} href={'https://www.mozilla.org/cs/firefox/new/'}>
                Firefox
              </a>
              {' nebo '}
              <a target={'_blank'} href={'https://www.google.com/chrome/'}>
                Chrome
              </a>
            </>
          </AlertForIE>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
    );
  }
}