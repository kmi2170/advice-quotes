import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        component="footer"
        variant="subtitle1"
        align="center"
        sx={{
          marginTop: "2rem",
          color: "#fff",
          textShadow: "2px 2px black",
        }}
      >
        &copy; {year} Kemmei H.
      </Typography>
    </Box>
  );
};

export default Footer;
