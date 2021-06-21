import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  titleApp: {
    fontFamily: 'Lobster',
    color: 'white',
  },
}));

const AppTitle: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        className={classes.titleApp}
      >
        Advice App
      </Typography>
    </div>
  );
};

export default AppTitle;
