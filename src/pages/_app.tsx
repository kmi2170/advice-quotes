import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme/theme";

import "../styles/globals.css";

import SEO from "../components/SEO";
import { Provider } from "react-redux";
import { store } from "../store/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement != null) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Advice App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <SEO />
      </Head>
      <CssBaseline />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
