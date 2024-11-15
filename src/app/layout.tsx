import { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import TanstackQueryClientProvider from "./QueryClientProvider";

import theme from "../styles/theme";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Advice App",
  description:
    "A very simple app to display randomly chosen Advice for fun, using Advice Slip JSON API. A Next.js project with Typescript, Material-UI and Redux-Toolkit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <TanstackQueryClientProvider>
              {children}
            </TanstackQueryClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
