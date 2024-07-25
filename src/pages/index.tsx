import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import Credits from "../components/Credits";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    background: "#222",
    backgroundImage: "linear-gradient(#222,#777,#222)",
  },
  titleApp: {
    fontFamily: "Lobster",
    color: "white",
    textShadow: "2px 2px #19857b",
    padding: theme.spacing(4, 0),
  },
  container: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // backgroundSize: 'fit',
    [theme.breakpoints.down("sm")]: {
      "@media (orientation: landscape)": {
        backgroundSize: "auto 100vw",
        height: "100vw",
      },
      "@media (orientation: portrait)": {
        backgroundSize: "auto 100vh",
        height: "100vh",
      },
    },
  },
  wallpaper1: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,20,0,1.0), rgba(0,50,0,0.0), rgba(0,20,1.0)), url("/images/flowers1.jpg")',
    maxWidth: "100%",
    height: "auto",
  },
  wallpaper2: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,0,0,1.0), rgba(0,20,0,0.0), rgba(0,0,0,1.0)), url("/images/bamboo1.jpg")',
    maxWidth: "100%",
    height: "auto",
  },
  cardContainer: {
    marginTop: "1.0rem",
  },
  switchContainer: {
    marginTop: "1.5rem",
    backgroundColor: "rgba(180,180,255,0.8)",
    padding: "0 0.5rem",
    borderRadius: "0.4rem",
  },

  footerContainer: {
    marginTop: theme.spacing(5),
  },
}));

const Home = () => {
  const classes = useStyles();

  const wallpaper = useAppSelector((state) => state.advice.wallpaper);
  // selectAdvice will be updated when any state changes, it always cause the component to re-render
  // const wallpaper = useAppSelector(selectAdvice, advice => advice.wallpaper);

  return (
    <div className={classes.root}>
      <Container
        maxWidth="lg"
        className={`${classes.container} ${
          wallpaper ? classes.wallpaper1 : classes.wallpaper2
        }`}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className={classes.titleApp}
        >
          Advice App
        </Typography>

        <div className={classes.cardContainer}>
          <Card />
        </div>

        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <Credits />
          </Grid>
        </Grid>

        <div className={classes.footerContainer}>
          <Footer />
        </div>
      </Container>
    </div>
  );
};

export default Home;
