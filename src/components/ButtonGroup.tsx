// import { useEffect } from 'react';
import {
  Typography,
  Grid,
  Button,
  Tooltip,
  //  ButtonGroup as Buttons,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

// import SelectCategory from './SelectCategory';
import CatergorySelectButton from './CategorySelectButton';

const buttonData = [
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

interface ButtonGroupProps {
  isButtonSelected: boolean[];
  setIsButtonSelected: (isButtonSelected: boolean[]) => void;
  setContent: (content: string | {} | undefined) => void;
  setCookieButton: (value: boolean[]) => void;
  setSelectedFetcher: (value: boolean[]) => void;
  setCategory: (category: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  isButtonSelected,
  setIsButtonSelected,
  setContent,
  setCookieButton,
  setSelectedFetcher,
  setCategory,
}) => {
  const classes = useStyles();

  const onClickHandler = (index: number) => {
    if (!isButtonSelected[index]) {
      let newIsButtonSelected = [false, false];
      newIsButtonSelected[index] = true;

      setCookieButton(newIsButtonSelected);
      setIsButtonSelected(newIsButtonSelected);
      setSelectedFetcher(newIsButtonSelected);
      setContent(undefined);
    }
  };

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      {buttonData.map((el, index) => {
        if (index === 0)
          return (
            <Grid item key={index}>
              <ButtonBody
                tooltipTitle={el.tooltipTitle}
                buttonTitle={el.buttonTitle}
                isSelected={isButtonSelected[index]}
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
          {buttonData.map((el, index) => {
            if (index === 1)
              return (
                <ButtonBody
                  key={index}
                  tooltipTitle={el.tooltipTitle}
                  buttonTitle={el.buttonTitle}
                  isSelected={isButtonSelected[index]}
                  onClickHandler={() => onClickHandler(index)}
                />
              );
          })}

          <div
            className={
              isButtonSelected[1]
                ? classes.categoryButton
                : classes.categoryButtonOff
            }
          >
            <CatergorySelectButton setCategory={setCategory} />
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
        // className={`${classes.button} ${
        //   !isSelected ? classes.buttonUnselected : null
        // }`}
        onClick={onClickHandler}
      >
        <Typography variant="h6">{buttonTitle}</Typography>
      </Button>
    </Tooltip>
  );
};
