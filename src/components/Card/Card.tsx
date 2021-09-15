import { useEffect } from 'react';
import {
  Grid,
  Card,
  Typography,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import CardContent from './CardContent';
import { ContentType } from '../../api/types';

import { useSelector, useDispatch } from 'react-redux';
import { actionTypes } from '../../redux/actionTypes';
import { RootState, AppDispatch } from '../../redux/store';

import { fetchAdvice } from '../../api/lib/fetchAdvice';
import { fetchQuotes } from '../../api/lib/fetchQuotes';

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

const CardComponent: React.FC = () => {
  const classes = useStyles();

  const isButtonSelected = useSelector<RootState, boolean[]>(
    (state) => state.isButtonSelected
  );
  const category = useSelector<RootState, string>((state) => state.category);
  const isLoading = useSelector<RootState, boolean>((state) => state.isLoading);
  const isError = useSelector<RootState, boolean>((state) => state.isError);
  const dispatch = useDispatch<AppDispatch>();

  const handleGetAnother = async () => {
    dispatch({ type: actionTypes.SET_IS_LOADING, payload: true });

    let content: ContentType;
    if (isButtonSelected[0]) {
      content = await fetchAdvice();
    } else if (isButtonSelected[1]) {
      content =
        category === 'all' ? await fetchQuotes() : await fetchQuotes(category);
    } else {
      console.log('no fetch function found.');
      dispatch({ type: actionTypes.SET_IS_LOADING, payload: false });
      dispatch({ type: actionTypes.SET_IS_ERROR, payload: true });
    }

    dispatch({ type: actionTypes.SET_IS_LOADING, payload: false });
    dispatch({ type: actionTypes.SET_CONTENT, payload: content });
  };

  useEffect(() => {
    isButtonSelected && handleGetAnother();
  }, [isButtonSelected, category]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Card className={classes.card} elevation={6}>
          {isButtonSelected && isButtonSelected[0] ? (
            <Typography variant="h6" color="error">
              Advice
            </Typography>
          ) : isButtonSelected && isButtonSelected[1] ? (
            category === 'all' ? (
              <Typography variant="subtitle1" color="error">
                Quote
              </Typography>
            ) : (
              <Typography variant="subtitle1" color="error">
                Quote - <em>{category}</em>
              </Typography>
            )
          ) : null}
          {isError ? (
            <Typography variant="h6" color="error">
              Error. Loading Data Failed. Please try again later.
            </Typography>
          ) : (
            <>
              {isLoading ? <CircularProgress /> : <CardContent />}

              <div className={classes.buttonWrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={`${classes.button} ${styles.button}`}
                  onClick={handleGetAnother}
                >
                  <Typography variant="h5">Get another!</Typography>
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
