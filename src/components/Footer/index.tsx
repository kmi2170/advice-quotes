import Typography from "@mui/material/Typography";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          marginTop: "2rem",
          color: "#fff",
          textShadow: "2px 2px black",
        }}
      >
        &copy; Kemmei H. {year} All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
