import { memo, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useAppDispatch } from '../../../app/hooks';
import { fetchAdviceQuote } from '../../../features/adviceAsync';
import styles from './index.module.css';

const useStyles = makeStyles(() => ({
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

const GetAnotherButton = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleGetAnother = async () => {
    dispatch(fetchAdviceQuote());
  };

  useEffect(() => {
    dispatch(fetchAdviceQuote());
  }, []);

  return (
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
  );
};

export default memo(GetAnotherButton);
