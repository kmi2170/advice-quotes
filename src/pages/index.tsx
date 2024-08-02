import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { Grid } from "@mui/material";

import Card from "../components/Card";
import Credits from "../components/Credits";
import Footer from "../components/Footer";
import { numOfWallpapers, wallpapers } from "../assets/wallpapers";
import BackgroundImage from "../components/BackgroundImage";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    width: "100vw",
    height: "100vh",
    backgroundImage:
      "radial-gradient( rgba(233, 233, 233, 1),rgba(114, 114, 114, 1))",
    zIndex: 10,
  },
  appTitle: {
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px #19857b",
    padding: theme.spacing(4, 0),
  },
  container: {
    height: "100vh",
  },
  creditsContainer: {
    width: "80vw",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem",
  },
  footerContainer: {
    paddingTop: "10px",
    paddingBottom: "30px",
  },
}));

const imageLoader = () => {
  const pickedId = Math.floor(Math.random() * numOfWallpapers);
  let imageUrl = wallpapers[pickedId].wallpaper;
  return imageUrl;
};

const Home = () => {
  const classes = useStyles();
  const image = imageLoader();

  return (
    <div className={classes.root}>
      <BackgroundImage img={image} />

      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            className={classes.appTitle}
          >
            Advice App
          </Typography>

          <Card />

          <div className={classes.creditsContainer}>
            <Credits />
          </div>

          <div className={classes.footerContainer}>
            <Footer />
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
