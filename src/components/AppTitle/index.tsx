import { memo } from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  titleApp: {
    fontFamily: 'Lobster',
    color: 'white',
    textShadow: '2px 2px #19857b',
  },
}));

const AppTitle = () => {
  const classes = useStyles();

  return (
    <Typography
      variant="h3"
      component="h1"
      align="center"
      className={classes.titleApp}
    >
      Advice/Quotes App
    </Typography>
  );
};

export default memo(AppTitle);
