import { useContext } from 'react';
import {
  Typography,
  Grid,
  Button,
  Tooltip,
  //  ButtonGroup as Buttons,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import CatergorySelectButton from './CategorySelectButton';

import { AdviceContext } from '../context';
import { actionTypes } from '../context/actionTypes';

const buttons = [
  {
    tooltipTitle: 'Randomly Chosen Advice',
    buttonTitle: 'Advice',
  },
  {
    tooltipTitle: 'Randomly Chosen Quotes',
    buttonTitle: 'Quotes',
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  quoteButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid',
    // borderColor: theme.palette.info.light,
    // borderRadius: '0.2rem',
    // padding: '0.2rem',
  },
  categoryButton: {
    marginLeft: '0.5rem',
  },
  categoryButtonOff: {
    display: 'none',
  },
}));

const ButtonGroup: React.FC = () => {
  const classes = useStyles();

  const { state, dispatch } = useContext(AdviceContext);

  const onClickHandler = (index: number) => {
    if (!state.isButtonSelected[index]) {
      let newIsButtonSelected = [false, false];
      newIsButtonSelected[index] = true;

      dispatch({
        type: actionTypes.SET_IS_BUTTON_SELECTED,
        payload: newIsButtonSelected,
      });

      dispatch({ type: actionTypes.SET_CONTENT, payload: undefined });
    }
  };

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      {buttons.map((button, index) => {
        if (index === 0)
          return (
            <Grid item key={index}>
              <ButtonBody
                tooltipTitle={button.tooltipTitle}
                buttonTitle={button.buttonTitle}
                isSelected={state.isButtonSelected[index]}
                onClickHandler={() => onClickHandler(index)}
              />
            </Grid>
          );
      })}

      <Grid item>
        <div
          className={classes.quoteButtonWrapper}
          //className={isButtonSelected[1] ? classes.quoteButtonWrapper : null}
        >
          {buttons.map((button, index) => {
            if (index === 1)
              return (
                <ButtonBody
                  key={index}
                  tooltipTitle={button.tooltipTitle}
                  buttonTitle={button.buttonTitle}
                  isSelected={state.isButtonSelected[index]}
                  onClickHandler={() => onClickHandler(index)}
                />
              );
          })}

          <div
            className={
              state.isButtonSelected[1]
                ? classes.categoryButton
                : classes.categoryButtonOff
            }
          >
            <CatergorySelectButton />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ButtonGroup;

const useButtonStyles = makeStyles((theme: Theme) => ({
  button: {
    borderRadius: '0.5rem',
    textTransform: 'capitalize',
  },
  buttonUnselected: {
    backgroundColor: 'gray',
  },
}));

interface ButtonBodyProps {
  tooltipTitle: string;
  buttonTitle: string;
  isSelected: boolean;
  onClickHandler: () => void;
}

const ButtonBody: React.FC<ButtonBodyProps> = ({
  tooltipTitle,
  buttonTitle,
  isSelected,
  onClickHandler,
}) => {
  const classes = useButtonStyles();

  return (
    <Tooltip title={tooltipTitle}>
      <Button
        variant={isSelected ? 'contained' : 'outlined'}
        color="secondary"
        size="small"
        className={classes.button}
        onClick={onClickHandler}
      >
        <Typography variant="h6">{buttonTitle}</Typography>
      </Button>
    </Tooltip>
  );
};
