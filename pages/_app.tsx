import App, {AppContext} from "next/app";
import * as React from "react";
import Head from "next/head";

export default class MyApp extends App{
    static async getInitialProps({Component, ctx}: AppContext) {
        if (Component.getInitialProps) {
            return { pageProps: await Component.getInitialProps(ctx) };
        }
        return { pageProps: {} };
    }

    render(): JSX.Element {
        const { Component, pageProps } = this.props;

        return <>
            <Head>
                <link href="../static/css/global.css" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>;
    }
}
