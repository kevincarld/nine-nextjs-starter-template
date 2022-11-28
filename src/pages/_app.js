import React from 'react';
import Head from 'next/head';


export default function App({ Component, pageProps }) {

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Nine starter template</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
