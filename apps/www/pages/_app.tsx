import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to www!</title>
      </Head>
      <main className="app">
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
