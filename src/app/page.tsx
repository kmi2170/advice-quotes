import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Card from "../components/Card";
import Footer from "../components/Footer";
import BackgroundImage from "../components/backgroundImage";
import { numOfWallpapers, wallpapers } from "../assets/wallpapers";

const imageLoader = () => {
  const pickedId = Math.floor(Math.random() * numOfWallpapers);
  let imageUrl = wallpapers[pickedId].wallpaper;
  return imageUrl;
};

const Home = () => {
  const image = imageLoader();

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "radial-gradient( rgba(233, 233, 233, 1),rgba(114, 114, 114, 1))",
        zIndex: 10,
      }}
    >
      <BackgroundImage img={image} />
      <Box justifyContent="center" alignItems="center" flexDirection="column">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "white",
            textShadow: "2px 2px #19857b",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          Advice App
        </Typography>

        <Card />
        <Footer />
      </Box>
    </Container>
  );
};

export default Home;
