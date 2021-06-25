import React, { useEffect } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { purple } from '@material-ui/core/colors';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Tooltip } from '@material-ui/core';

// const PurpleSwitch = withStyles({
//   switchBase: {
//     color: purple[500],
//     '&$checked': {
//       color: purple[500],
//     },
//     '&$checked + $track': {
//       backgroundColor: 'white',
//     },
//   },
//   checked: {},
//   track: {},
// })(Switch);

const useStyles = makeStyles((theme: Theme) => ({
  switchName1: {
    // color: 'white',
    marginRight: '1rem',
  },
  switchName2: {
    // color: 'white',
  },
}));

interface SwitchComponentProps {
  state: boolean;
  setState: (state: boolean) => void;
  setCookieWallpaper: (value: boolean) => void;
}

const SwitchComponent: React.FC<SwitchComponentProps> = ({
  state,
  setState,
  setCookieWallpaper,
}) => {
  const classes = useStyles();

  // console.log('switch comp ', state, typeof state);

  const handleChange = () => {
    if (state) {
      setState(false);
      setCookieWallpaper(false);
    } else {
      setState(true);
      setCookieWallpaper(true);
    }
  };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography className={classes.switchName1} variant="body2">
          Town
        </Typography>
      </Grid>
      <Grid item>
        <Tooltip title="Switch Wallpaper">
          <Switch
            color="default"
            checked={state}
            onChange={handleChange}
            // inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          {/* 
          <FormControlLabel
            control={
              <PurpleSwitch
                checked={state}
                onChange={handleChange}
                // name="checkedA"
              />
            }
            label=""
          />
      */}
        </Tooltip>
      </Grid>
      <Grid item>
        <Typography className={classes.switchName2} variant="body2">
          Flowers
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SwitchComponent;
