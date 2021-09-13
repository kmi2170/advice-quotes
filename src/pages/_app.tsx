import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';

// import { QueryClientProvider } from 'react-query';
// import { Hydrate } from 'react-query/hydration';
// import queryClient from '../utils/reactQuery';
// import { ReactQueryDevtools } from 'react-query/devtools';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../utils/theme';

import '../styles/globals.css';

import AdviceContextProvider from '../context';

// const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        {/* <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}> */}
        <Head>
          <title>Advice Appli</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AdviceContextProvider>
          <Component {...pageProps} />
        </AdviceContextProvider>
        {/* <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider> */}
      </ThemeProvider>
    </CookiesProvider>
  );
};

export default MyApp;
