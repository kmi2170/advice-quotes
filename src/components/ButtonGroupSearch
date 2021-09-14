import {
  Grid,
  Typography,
  Button,
  ButtonGroup as Buttons,
  Tooltip,
  useTheme,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface ButtonGroupProps {
  isRandom: boolean;
  setIsRandom: (isRandom: boolean) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ isRandom, setIsRandom }) => {
  const classes = useStyles();
  const theme = useTheme();

  const onClickHandlerRandom = () => {
    if (!isRandom) setIsRandom(true);
  };

  const onClickHandlerSearch = () => {
    if (isRandom) setIsRandom(false);
  };

  // const onClickHandlerButtonSearch = () => {
  //   setIsRandom((prev) => !prev);
  // };

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Buttons aria-label="contained primary button group">
            <Tooltip title="Randomly Chosen Advise">
              <Button
                variant={isRandom ? 'contained' : 'outlined'}
                //               color="secondary"
                //                color="info"
                size="small"
                // className={isRandom ? classes.buttonSelected : classes.buttonUnSelected}
                //className={classes.button}
                className={`${classes.button} %{classes.buttonColor}`}
                onClick={onClickHandlerRandom}
              >
                Random
              </Button>
            </Tooltip>
            <Tooltip title="Search by Word">
              <Button
                variant={!isRandom ? 'contained' : 'outlined'}
                size="small"
                //                color="secondary"
                // className={!isRandom ? classes.buttonSelected : classes.buttonUnSelected}
                className={(classes.button, classes.buttonColor)}
                onClick={onClickHandlerSearch}
              >
                Search
              </Button>
            </Tooltip>
          </Buttons>
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonGroup;

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    //width: '80%',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    minHeight: '50vh',
    padding: '2rem',
    borderRadius: '1rem',
  },
  advice: {
    // fontFamily: 'Raleway',
    fontFamily: 'Viaoda Libre',
  },
  button: {
    borderRadius: '1.5rem',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  buttonSelected: {
    // color: '#000',
  },
  buttonUnSelected: {
    // color: '#bbb',
    borderColor: '#bbb',
  },
  buttonColor: {
    //color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.info.light,
    color: 'white',
  },
}));
