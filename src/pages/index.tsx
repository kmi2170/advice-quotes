import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import Credits from "../components/Credits";
import Footer from "../components/Footer";
import { wallpapers } from "../assets/wallpapers";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  appTitle: {
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px #19857b",
    padding: theme.spacing(4, 0),
  },
  container: {
    height: "100vh",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
  },
  cardContainer: {
    marginTop: "1.0rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    marginTop: "1.5rem",
    backgroundColor: "rgba(180,180,255,0.8)",
    padding: "0 0.5rem",
    borderRadius: "0.4rem",
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

const Home = () => {
  const classes = useStyles();

  const wallpaper = useAppSelector((state) => state.advice.wallpaper);

  console.log(wallpapers);

  return (
    <div className={classes.root}>
      <Image
        src={wallpapers[0].wallpaper}
        alt="background"
        layout="fill"
        objectFit="cover"
        style={{ zIndex: -10 }}
      />
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className={classes.appTitle}
        >
          Advice App
        </Typography>

        <div className={classes.cardContainer}>
          <Card />
        </div>

        <div className={classes.creditsContainer}>
          <Credits />
        </div>

        <div className={classes.footerContainer}>
          <Footer />
        </div>
      </Container>
    </div>
  );
};

export default Home;
