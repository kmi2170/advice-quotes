import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme/theme";

import "../styles/globals.css";

import SEO from "../components/SEO";
import { Provider } from "react-redux";
import { store } from "../store/store";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement != null) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  );
};

export default MyApp;
