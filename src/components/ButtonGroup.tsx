import {
  Grid,
  Button,
  //  ButtonGroup as Buttons,
  Tooltip,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

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

// const useStyles = makeStyles((theme: Theme) => ({
//   buttonWrapper: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '2rem',
//   },
// }));

interface ButtonGroupProps {
  isButtonSelected: boolean[];
  setIsButtonSelected: (isButtonSelected: boolean[]) => void;
  setContent: (content: string | {} | undefined) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  isButtonSelected,
  setIsButtonSelected,
  setContent,
}) => {
  // const classes = useStyles();

  const onClickHandler = (index: number) => {
    if (!isButtonSelected[index]) {
      let newIsButtonSelected = [false, false];
      newIsButtonSelected[index] = true;

      setIsButtonSelected(newIsButtonSelected);
      setContent(undefined);
      // } else {
      //   console.log('same button');
    }
  };

  return (
    <div>
      <Grid container justify="space-around" alignItems="center">
        {buttonData.map((el, index) => (
          <Grid item key={index}>
            <ButtonBody
              tooltipTitle={el.tooltipTitle}
              buttonTitle={el.buttonTitle}
              isSelected={isButtonSelected[index]}
              onClickHandler={() => onClickHandler(index)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
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
        {buttonTitle}
      </Button>
    </Tooltip>
  );
};
