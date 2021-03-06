import React from "react";
import App from "next/app";
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
