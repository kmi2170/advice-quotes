import { createTheme } from "@mui/material/styles";
import { responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Overlock } from "next/font/google";

export const overlock = Overlock({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "700"],
  display: "swap",
});

let theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: overlock.style.fontFamily,
  },
  components: {
    // Credits
    MuiPopover: {
      styleOverrides: {
        root: {
          borderRadius: "0.2rem",
          padding: "0.5rem",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
