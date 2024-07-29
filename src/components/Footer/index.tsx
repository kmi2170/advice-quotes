import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    color: "#fff",
    textShadow: "1px 1px #19857b",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const year = new Date().getFullYear();

  return (
    <footer>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.footer}
          >
            &copy; kmi {year}. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
