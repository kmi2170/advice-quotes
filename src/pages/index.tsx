import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Card from "../components/Card";
import Credits from "../components/Credits";
import Footer from "../components/Footer";
import Image from "next/image";
import useImageUrl from "../hooks/useImageUrl";
import styles from "./index.module.css";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import { defaultBlurData } from "../../public/wallpapers/default_blur";

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

  const { imageUrl } = useImageUrl();
  // const [loaded, setLoaded] = useState(false);

  return (
    <div className={classes.root}>
      <Image
        src={imageUrl}
        blurDataURL={defaultBlurData}
        placeholder="blur"
        alt="background"
        quality={50}
        fill
        //sizes="100vw 100vh"
        priority
        style={{
          objectFit: "cover",
          zIndex: -10,
        }}
        // onLoad={() => {
        //   setLoaded(true);
        // }}
        // className={loaded ? styles.blur_remove : styles.blur}
      />
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
