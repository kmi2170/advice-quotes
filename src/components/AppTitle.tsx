import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  titleApp: {
    fontFamily: 'Lobster',
    color: 'white',
    // textShadow: '2px 2px #2196f3',
    textShadow: '2px 2px #19857b',
    // dark: '#19857b',
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: '1.75rem',
    // },
  },
}));

const AppTitle: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography
      variant="h3"
      component="h1"
      align="center"
      className={classes.titleApp}
      // style={{ fontSize: '1rem' }}
    >
      Advice/Quotes App
    </Typography>
  );
};

export default AppTitle;
