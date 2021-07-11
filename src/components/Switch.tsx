import Switch from '@material-ui/core/Switch';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  switchName1: {
    // color: 'white',
    // marginRight: '1rem',
  },
  switchName2: {
    // color: 'white',
  },
}));

interface SwitchComponentProps {
  state: boolean;
  setWallpaper: (state: boolean | ((state: boolean) => boolean)) => void;
  setCookieWallpaper: (state: boolean | ((state: boolean) => boolean)) => void;
}

const SwitchComponent: React.FC<SwitchComponentProps> = ({
  state,
  setWallpaper,
  setCookieWallpaper,
}) => {
  const classes = useStyles();

  const handleChange = () => {
    setWallpaper((prev) => !prev);
    setCookieWallpaper((prev) => !prev);
  };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setWallpaper({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography className={classes.switchName1} variant="h6">
          Bamboos
        </Typography>
      </Grid>
      <Grid item>
        <Tooltip title="Switch Wallpaper">
          <Switch
            color="default"
            checked={state}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'switch the wallpaer' }}
          />
        </Tooltip>
      </Grid>
      <Grid item>
        <Typography className={classes.switchName2} variant="h6">
          Flowers
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SwitchComponent;
