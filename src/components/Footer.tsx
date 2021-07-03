import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    color: '#fff',
    // fontFamily: 'Raleway',
    // fontSize: '0.875rem',
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: '0.6rem',
    // },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  const dt = new Date();
  const year = dt.getFullYear();

  return (
    <footer>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.footer}
          >
            Copyrihgt &copy; kmi {year}. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
