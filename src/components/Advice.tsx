import { useState } from 'react';

import {
  Card,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import styles from './Advice.module.css';
// import './Advice.module.css';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '80vw',
    [theme.breakpoints.up('sm')]: {
      minWidth: '80vw',
    },
    minHeight: '50vh',
    padding: '1rem',
    paddingTop: '1.5rem',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    backgroundImage:
      'linear-gradient(to bottom, rgb(255,255,255,1.0),rgba(255,255,255,0.0))',
  },
  textBox: {
    display: 'block',
    height: '30vh',
    overflowY: 'auto',
  },
  advice: {
    // fontFamily: 'Raleway',
    // fontFamily: 'Viaoda Libre',
    fontFamily: 'Playfair Display',
    //fontSize: '2.25rem',
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: '1.25rem',
    //   // '@media (orientation: landscape)': {
    //   //   fontSize: '1.25rem',
    //   // },
    // },
    [theme.breakpoints.down('xs')]: {
      '@media (orientation: portrait)': {
        fontSize: '1.0rem',
      },
    },
  },
  button: {
    borderRadius: '0.5rem',
    textTransform: 'capitalize',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
}));

interface AdviceProps {
  advice: string;
  url: string;
  fetchFunc: (url: string) => void;
  isLoading: boolean;
  isRandom: boolean;
  isError: boolean;
}

const Advice: React.FC<AdviceProps> = ({
  advice,
  url,
  fetchFunc,
  isLoading,
  isRandom,
  isError,
}) => {
  const classes = useStyles();

  const onClickHandler = () => fetchFunc(url);

  const onSubmitHandler = () => {
    // fetchFunc(url);
  };

  return (
    <Card className={classes.card} elevation={6}>
      {isError ? (
        <Typography variant="body2" color="error">
          Error. Loading Data Failed. Please try again later.
        </Typography>
      ) : isRandom ? (
        <>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <div className={classes.textBox}>
              <Typography
                className={classes.advice}
                // className={`${classes.advice} ${styles.fadeInText}`}
                variant="h4"
                align="center"
              >
                {advice}
              </Typography>
            </div>
          )}
          <div className={classes.buttonWrapper}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              // className={classes.button}
              className={`${classes.button} 
          ${styles.button}`}
              onClick={onClickHandler}
            >
              Get another!
            </Button>
          </div>
        </>
      ) : (
        <AdviceSearch onClick={onSubmitHandler} />
      )}
    </Card>
  );
};

export default Advice;

interface AdviceSearchProps {
  onSubmitHandler: () => void;
}
const AdviceSearch: React.FC<AdviceSearchProps> = ({ onSubmitHandler }) => {
  return (
    <form noValidate autoComplete="off">
      <TextField id="searchForm" label="Search Keyword" variant="outlined" />
      <Typography variant="body2" color="textSecondary">
        Only SINGLE WORD is accepted.
      </Typography>
    </form>
  );
};
