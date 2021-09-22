import { Typography, Grid, Button, Tooltip } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import CatergorySelectButton from './CategorySelectButton';

import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setContent, setIsButtonSelected } from '../../features/adviceSlice';

const useStyles = makeStyles((theme: Theme) => ({
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

const ButtonGroup: React.FC = () => {
  const classes = useStyles();

  const isButtonSelected = useAppSelector(
    (state: RootState) => state.advice.isButtonSelected
  );
  const dispatch = useAppDispatch();

  const handleClick = (index: number) => {
    if (!isButtonSelected[index]) {
      let newIsButtonSelected = [false, false];
      newIsButtonSelected[index] = true;

      dispatch(setContent(undefined));
      dispatch(setIsButtonSelected(newIsButtonSelected));
    }
  };

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      {isButtonSelected &&
        buttons.map((button, index) => (
          <Grid key={index} item>
            <div className={index === 1 ? classes.quotesButtonContainer : null}>
              <Tooltip title={button.tooltip}>
                <Button
                  variant={isButtonSelected[index] ? 'contained' : 'outlined'}
                  color="secondary"
                  size="small"
                  className={classes.button}
                  onClick={() => handleClick(index)}
                >
                  <Typography variant="h6">{button.name}</Typography>
                </Button>
              </Tooltip>
              {index === 1 && isButtonSelected[1] && (
                <div className={classes.categoryButton}>
                  <CatergorySelectButton />
                </div>
              )}
            </div>
          </Grid>
        ))}
    </Grid>
  );
};

export default ButtonGroup;
