import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
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
        &copy; {year} Kemmei H. | Powered by&nbsp;
      </Typography>
      <a
        href="https://api.adviceslip.com"
        rel="noopener noreferrer"
        target="_blank"
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
          Advice Slip
        </Typography>
      </a>
    </Box>
  );
};

export default Footer;
