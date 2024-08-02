import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  footer: {
    color: "#fff",
    textShadow: "1px 1px black",
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
