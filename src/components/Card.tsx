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
  setIsGetAnother: (isGetAnother: boolean) => void;
  isButtonSelected: boolean[];
  isLoading: boolean;
  isError: boolean;
  // fetchFunc: () => void;
}

const CardComponent: React.FC<CardContentProps> = ({
  content,
  setIsGetAnother,
  isButtonSelected,
  isLoading,
  isError,
  // fetchFunc,
}) => {
  const classes = useStyles();

  // const onClickHandler = () => fetchFunc();
  const onClickHandler = () => setIsGetAnother(true);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Card className={classes.card} elevation={6}>
          {isError ? (
            <Typography variant="body2" color="error">
              Error. Loading Data Failed. Please try again later.
            </Typography>
          ) : (
            <>
              {isLoading && !content ? (
                <CircularProgress />
              ) : (
                <CardContent
                  content={content}
                  isButtonSelected={isButtonSelected}
                />
              )}

              {/* 
          {isLoading ? (
            <CircularProgress />
          ) : isButtonSelected[0] ? (
            <CardContent content={content} />
          ) : isButtonSelected[1] ? (
            <div>{JSON.stringify(content)}</div>
          ) : null}
          */}

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
