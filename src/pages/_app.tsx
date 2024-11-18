import "@styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import {NextIntlProvider} from "next-intl";
import {GetStaticProps} from "next";
import Footer from "@components/sections/Footer";
import Header from "@components/sections/Header";
import { Analytics } from "@vercel/analytics/react";

export default function App({Component, pageProps, router}: AppProps) {
    return (
        <>
            <Head>
                <title>Ewan Rakotoanosy</title>
                <meta name="subject" content="Ewan Rakotoanosy" />
                <meta name="description" content="Ewan Rakotoanosy Portfolio" />
                <meta name="author" content="Ewan Rakotoanosy" />
                <meta property="og:type" content="portfolio" />
                <meta property="og:url" content="rakotoew.fr" />
                <meta property="og:title" content="Ewan Rakotoanosy" />
                <meta property="og:description" content="Ewan Rakotoanosy Portfolio" />
                <meta property="og:image" content="/public/android-chrome-512x512.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="rakotoew.fr" />
                <meta property="twitter:title" content="Ewan Rakotoanosy" />
                <meta property="twitter:description" content="Ewan Rakotoanosy Portfolio" />
                <meta property="twitter:image" content="/android-chrome-512x512.png" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />

                <link rel="canonical" href="https://rakotoew.fr" />
                <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap"
                      rel="stylesheet" />
                <link rel="icon" href="/android-chrome-512x512.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            </Head>
            <NextIntlProvider messages={pageProps.messages}>
                <Header />
                <Component {...pageProps} key={router.route}/>
                <Footer />
                <Analytics/>
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
