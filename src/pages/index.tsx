import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Card from "../components/Card";
import Credits from "../components/Credits";
import Footer from "../components/Footer";
import Image from "next/image";
import getImageUrl from "../hooks/getImageUrl";
import styles from "./index.module.css";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { defaultBlurData } from "../../public/wallpapers/default_blur";
import {
  numOfWallpapers,
  placeholderImage,
  wallpapers,
} from "../assets/wallpapers";
import { useRouter } from "next/router";

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

  // const { imageUrl } = getImageUrl();

  const [mountImage, setMountImage] = useState(false);
  const imageLoader = () => {
    const pickedId = Math.floor(Math.random() * numOfWallpapers);
    let imageUrl = wallpapers[pickedId].wallpaper;
    console.log({ pickedId });
    console.log(imageUrl.src);

    return imageUrl;
  };

  const image = imageLoader();

  //const [image, setImage] = useState(imageLoader());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMountImage(true);
  }, []);
  console.log({ mountImage });

  return (
    <div className={classes.root}>
      <Image
        // loader={imageLoader}
        src={image}
        // src={wallpapers[0].wallpaper}
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
        onLoad={() => {
          console.log("loaded =========");
          // setUpdate((prev) => prev + 1);

          // setLoaded(true);
        }}
        // className={styles.blur_remove}
      />
      {/* {mountImage ? (
        <Image
          // loader={imageLoader}
          src={image}
          // src={wallpapers[0].wallpaper}
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
          onLoad={() => {
            console.log("loaded =========");
            // setUpdate((prev) => prev + 1);

            // setLoaded(true);
          }}
          // className={styles.blur_remove}
        />
      ) : (
        <Image
          src={placeholderImage}
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
          className={styles.blur}
        />
      )} */}
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
