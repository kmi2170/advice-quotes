import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import { Provider } from "react-redux";
import { store } from "../store/store";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import theme from "../theme/theme";
import "../styles/globals.css";

import SEO from "../components/SEO";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement != null) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <title>Advice App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <SEO />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default MyApp;
