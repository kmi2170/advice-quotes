import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    background: '#222',
  },
  titleApp: {
    fontFamily: 'Lobster',
    color: 'white',
    textShadow: '2px 2px #19857b',
    padding: theme.spacing(4, 0),
  },
  container: {
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // backgroundSize: 'fit',
    [theme.breakpoints.down('sm')]: {
      '@media (orientation: landscape)': {
        backgroundSize: 'auto 100vw',
        height: '100vw',
      },
      '@media (orientation: portrait)': {
        backgroundSize: 'auto 100vh',
        height: '100vh',
      },
    },
  },
  wallpaperNature: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,20,0,1.0), rgba(0,50,0,0.0), rgba(0,20,1.0)), url("/images/flowers1.jpg")',
  },
  wallpaperTown: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,0,0,1.0), rgba(0,20,0,0.0), rgba(0,0,0,1.0)), url("/images/bamboo1.jpg")',
  },
  cardContainer: {
    marginTop: '1.0rem',
  },
  switchContainer: {
    marginTop: '1.5rem',
    backgroundColor: 'rgba(180,180,255,0.8)',
    padding: '0 0.5rem',
    borderRadius: '0.5rem',
  },

  footerContainer: {
    marginTop: theme.spacing(5),
  },
}));
