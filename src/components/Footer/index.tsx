import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: "2rem",
    color: "#fff",
    textShadow: "2px 2px black",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer>
      <Typography variant="subtitle1" align="center" className={classes.footer}>
        &copy; kmi {year}. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
