import Typography from "@mui/material/Typography";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
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
  );
};

export default Footer;
