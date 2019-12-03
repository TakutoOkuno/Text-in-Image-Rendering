import App, {AppContext} from "next/app";
import * as React from "react";
import Head from "next/head";

export default class MyApp extends App{
    render(): JSX.Element {
        const { Component, pageProps } = this.props;

        return <>
            <Head>
                <link href="/css/global.css" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>;
    }
}
