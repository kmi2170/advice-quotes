import { createTheme } from '@material-ui/core/styles';
import { responsiveFontSizes } from '@material-ui/core/styles';

// import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { red } from '@material-ui/core/colors';

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
      main: '#556cd6',
    },
    secondary: {
      main: '#F53689',
      // dark: '#19857b',
    },
    info: {
      main: '#2196f3',
      light: '#2196f3',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Raleway',
      'Roboto',
      'Acme',
      'Lobster',
      'sans-serif',
      // 'Roboto Condensed',
    ].join(','),
  },
  overrides: {
    // Credits
    MuiPopover: {
      paper: {
        borderRadius: '0.2rem',
        padding: '0.5rem',
        // backgroundColor: '#555',
      },
    },
    // Slect Category
    MuiMenu: {
      list: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiMenuItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: 0,
        // lineHeight: 0,
        fontSize: '0.8rem',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
