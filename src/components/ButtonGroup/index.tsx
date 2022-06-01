import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import QuoteCatergoryButton from './QuoteCategoryButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  setContent,
  setIsButtonSelected,
  selectAdvice,
} from '../../features/adviceSlice';
import { fetchAdviceQuote } from '../../features/adviceAsync';
import { useCustomeCookies } from '../../hooks/useCustomCookies';
import { useEffect } from 'react';

const useStyles = makeStyles(() => ({
  quotesButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButton: {
    marginLeft: '0.5rem',
  },
  button: {
    borderRadius: '0.5rem',
    textTransform: 'capitalize',
  },
  buttonUnselected: {
    backgroundColor: 'gray',
  },
}));

const buttons = [
  { tooltip: 'Randomly Chosen Advice', name: 'Advice' },
  { tooltip: 'Randomly Chosen Quotes', name: 'Quotes' },
];

const ButtonGroup = () => {
  const classes = useStyles();
  console.log('buttongroup');

  const { isTypeButtonSelected } = useAppSelector(selectAdvice);
  const dispatch = useAppDispatch();
  const { cookies, setButtonCookie } = useCustomeCookies();

  useEffect(() => {
    if (cookies.button && Array.isArray(cookies.button)) {
      dispatch(setIsButtonSelected(cookies.button));
    }
  }, []);

  useEffect(() => setButtonCookie(isTypeButtonSelected), [
    isTypeButtonSelected,
  ]);

  const handleTypeButtonClick = (index: number) => {
    if (!isTypeButtonSelected[index]) {
      let newIsTypeButtonSelected = Array(isTypeButtonSelected.length).fill(
        false
      );
      newIsTypeButtonSelected[index] = true;

      dispatch(setContent(undefined));
      dispatch(setIsButtonSelected(newIsTypeButtonSelected));
      dispatch(fetchAdviceQuote());
    }
  };

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      {isTypeButtonSelected &&
        buttons.map((button, index) => (
          <Grid key={index} item>
            <div className={index === 1 ? classes.quotesButtonContainer : null}>
              <Tooltip title={button.tooltip}>
                <Button
                  variant={
                    isTypeButtonSelected[index] ? 'contained' : 'outlined'
                  }
                  color="secondary"
                  size="small"
                  className={classes.button}
                  onClick={() => handleTypeButtonClick(index)}
                >
                  <Typography variant="h6">{button.name}</Typography>
                </Button>
              </Tooltip>
              {index === 1 &&
                isTypeButtonSelected[1] && (
                  <div className={classes.categoryButton}>
                    <QuoteCatergoryButton />
                  </div>
                )}
            </div>
          </Grid>
        ))}
    </Grid>
  );
};

export default ButtonGroup;
