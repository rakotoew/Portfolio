import "@styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import {NextIntlProvider} from "next-intl";
import {GetStaticProps} from "next";

export default function App({Component, pageProps, router}: AppProps) {
    return (
        <>
            <Head>
                <title>Ewan Rakotoanosy</title>
                <meta name="subject" content="Ewan Rakotoanosy"/>
                <meta name="description" content="Ewan Rakotoanosy Portfolio"/>
                <meta name="author" content="Ewan Rakotoanosy"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="rakotoew.fr"/>
                <meta property="og:title" content="Ewan Rakotoanosy"/>
                <meta property="og:description" content="Ewan Rakotoanosy Portfolio"/>
                <meta property="og:image" content="/public/icons/icon-512x512.png"/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="rakotoew.fr"/>
                <meta property="twitter:title" content="Ewan Rakotoanosy"/>
                <meta property="twitter:description" content="Ewan Rakotoanosy Portfolio"/>
                <meta property="twitter:image" content="/public/icons/icon-512x512.png"/>
            </Head>
            <NextIntlProvider messages={pageProps.messages}>
                <Component {...pageProps} key={router.route}/>
            </NextIntlProvider>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`)
        }
    };
};
