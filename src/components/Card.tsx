import { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  Typography,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import CardContent from './CardContent';
import { contentType } from '../pages/index';

import styles from './Card.module.css';

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

interface CardContentProps {
  content: contentType;
  isButtonSelected: boolean[];
  isLoading: boolean;
  isError: boolean;
  fetchFuncAdvice: () => void;
  fetchFuncQuote: () => void;
  selectedFetcher: boolean[];
}

const CardComponent: React.FC<CardContentProps> = ({
  content,
  isButtonSelected,
  isLoading,
  isError,
  fetchFuncAdvice,
  fetchFuncQuote,
  selectedFetcher,
}) => {
  const classes = useStyles();

  const onClickHandler = () => {
    if (selectedFetcher[0]) {
      console.log('card Advice ', selectedFetcher);
      fetchFuncAdvice();
    } else if (selectedFetcher[1]) {
      console.log('card Quote ', selectedFetcher);
      fetchFuncQuote();
    }
  };

  useEffect(() => {
    if (selectedFetcher !== undefined) {
      console.log('card useEffect ', selectedFetcher);
      onClickHandler();
    }
  }, [selectedFetcher]);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Card className={classes.card} elevation={6}>
          {isButtonSelected[0] ? (
            <Typography variant="body2" color="error">
              - Advice -
            </Typography>
          ) : isButtonSelected[1] ? (
            <Typography variant="body2" color="error">
              - Quote -
            </Typography>
          ) : null}
          {isError ? (
            <Typography variant="body2" color="error">
              Error. Loading Data Failed. Please try again later.
            </Typography>
          ) : (
            <>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <CardContent
                  content={content}
                  isButtonSelected={isButtonSelected}
                />
              )}

              <div className={classes.buttonWrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  // className={classes.button}
                  className={`${classes.button} ${styles.button}`}
                  onClick={onClickHandler}
                >
                  Get another!
                </Button>
              </div>
            </>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardComponent;
