import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Card from "../components/Card";
import Credits from "../components/Credits";
import Footer from "../components/Footer";
import Image from "next/image";
import useImageUrl from "../hooks/useImageUrl";
import styles from "./index.module.css";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    width: "100vw",
    height: "100vh",
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
  cardContainer: {
    marginTop: "1.0rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

  const wallpaperUrl = useImageUrl();

  return (
    <div className={classes.root}>
      <Image
        src={wallpaperUrl}
        alt="background"
        quality={100}
        fill
        //sizes="100vw 100vh"
        priority
        style={{
          objectFit: "cover",
          zIndex: -10,
        }}
        className={styles.blur}
      />
      <Container maxWidth="lg">
        <Typography
          variant="h2"
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
