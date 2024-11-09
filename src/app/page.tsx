import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Card from "../components/Card";
import Footer from "../components/Footer";
import BackgroundImage from "../components/backgroundImage";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <BackgroundImage />

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
    </Container>
  );
};

export default Home;
