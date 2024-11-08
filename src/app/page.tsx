// "use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Card from "../components/Card";
import Credits from "../components/Credits";
import Footer from "../components/Footer";
import { numOfWallpapers, wallpapers } from "../assets/wallpapers";
import BackgroundImage from "../components/backgroundImage";
import { Wrapper } from "./styles";

const imageLoader = () => {
  const pickedId = Math.floor(Math.random() * numOfWallpapers);
  let imageUrl = wallpapers[pickedId].wallpaper;
  return imageUrl;
};

const Home = () => {
  const image = imageLoader();

  return (
    <Container maxWidth="lg">
      <BackgroundImage img={image} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px #19857b",
            padding: "1rem",
          }}
        >
          Advice App
        </Typography>

        <Card />
        {/* <Credits /> */}
        <Footer />
      </Grid>
    </Container>
  );
};

export default Home;
