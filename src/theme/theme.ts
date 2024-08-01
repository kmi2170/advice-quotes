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

// const breakpoints = createBreakpoints({});
// breakpoints.values.lg = 1024
// breakpoints.values['xxl'] = 3000
// '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#F53689",
      // dark: '#19857b',
    },
    info: {
      main: "#2196f3",
      light: "#2196f3",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
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
          // backgroundColor: '#555',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
