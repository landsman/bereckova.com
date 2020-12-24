import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import getConfig from 'next/config';
import getFavicons from '~/components/favicons';

const defaultValues = {
    title: `seo.personal.title_defaul`,
    description: `seo.personal.description_defaul`,
    ogImage: `seo.personal.og_image_defaul`,
    ogSiteName: `seo.personal.og_site_name`,
};

const { publicRuntimeConfig } = getConfig();

function SEO(
{
    description,
    title,
    titleSuffix,
    ogImage,
    ogType,
    noIndex,
}) {
    const _props = {
        description: description,
        title: title,
        titleSuffix: titleSuffix,
        ogImage: ogImage,
        noIndex: noIndex,
        ogType: ogType,
    };

    const finalProps = Object.keys(_props).reduce((acc, propKey) => {
        acc[propKey] = _props[propKey] || defaultValues[propKey];
        return acc;
    }, {});

    const googleTagManager = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${publicRuntimeConfig.GTM}');`;

    return (
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
            <meta name="HandheldFriendly" content="true" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="author" content="StudioArt.cz" />
            <title>
                {(finalProps.title)}
                {finalProps.titleSuffix ? ' — Anezka Bereckova' : ''}
            </title>
            {finalProps.noIndex && (
                <meta name={'robots'} content={'noindex, nofollow'} />
            )}
            <meta
                name={'description'}
                content={finalProps.description}
            />
            <meta
                property={'og:image'}
                content={finalProps.ogImage}
            />
            <meta
                property={'og:description'}
                content={(finalProps.description)}
            />
            <meta property={'og:title'} content={finalProps.title} />
            <meta property={'og:type'} content={finalProps.ogType} />
            <meta property={'og:site_name'} content={finalProps.ogSiteName} />
            <meta
                property="og:email"
                content={`seo.shared.og_email`}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name={'twitter:title'} content={finalProps.title} />
            <meta
                name={'twitter:image'}
                content={finalProps.ogImage}
            />
            <meta
                name={'twitter:description'}
                content={finalProps.description}
            />
            <meta name={'twitter:creator'} content={'StudioArt.cz'} />
            {getFavicons()}
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: googleTagManager,
                }}
            />
        </Head>
    );
}

SEO.propTypes = {
    // title: PropTypes.object.isRequired,
    titleSuffix: PropTypes.bool,
    // description: PropTypes.object,
    // ogImage: PropTypes.object,
    ogType: PropTypes.string,
    noIndex: PropTypes.bool
};

SEO.defaultProps = {
    noIndex: false,
    titleSuffix: true,
    ogType: 'website',
};

export default SEO;