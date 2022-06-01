import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme } from '@material-ui/core/styles';

import CardContent from './CardContent';
import GetAnotherButton from './GetAnotherButton';
import { useAppSelector } from '../../app/hooks';
import { selectAdvice } from '../../features/adviceSlice';

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

const CardComponent = () => {
  const classes = useStyles();

  const {
    isTypeButtonSelected,
    quoteCategory,
    isLoading,
    isError,
  } = useAppSelector(selectAdvice);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Card className={classes.card} elevation={6}>
          {isTypeButtonSelected &&
            isTypeButtonSelected[0] && (
              <Typography variant="h6" color="error">
                Advice
              </Typography>
            )}

          {isTypeButtonSelected &&
            isTypeButtonSelected[1] &&
            (quoteCategory === 'all' ? (
              <Typography variant="subtitle1" color="error">
                Quote
              </Typography>
            ) : (
              <Typography variant="subtitle1" color="error">
                Quote - <em>{quoteCategory}</em>
              </Typography>
            ))}

          {isError ? (
            <Typography variant="h6" color="error">
              Error. Loading Data Failed. Please try again later.
            </Typography>
          ) : (
            <>
              {isLoading ? <CircularProgress /> : <CardContent />}
              <GetAnotherButton />
            </>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardComponent;
