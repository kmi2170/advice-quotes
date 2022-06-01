import { useEffect } from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setWallpaper } from '../../features/adviceSlice';
import { useCustomeCookies } from '../../hooks/useCustomCookies';

const useStyles = makeStyles(() => ({
  switchName1: {},
  switchName2: {},
}));

const SwitchWallpaper = () => {
  const classes = useStyles();
  console.log('switch');

  const wallpaper = useAppSelector(state => state.advice.wallpaper);
  const dispatch = useAppDispatch();
  const { cookies, setWallpaperCookie } = useCustomeCookies();

  useEffect(() => {
    cookies.wallpaper &&
      typeof cookies.wallpaper === 'string' &&
      typeof JSON.parse(cookies.wallpaper) === 'boolean' &&
      dispatch(setWallpaper(JSON.parse(cookies.wallpaper)));
  }, []);

  useEffect(() => setWallpaperCookie(wallpaper), [wallpaper]);

  const handleSwitchWallpaper = () => dispatch(setWallpaper(null));

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Typography className={classes.switchName1} variant="h6">
          Bamboos
        </Typography>
      </Grid>
      <Grid item>
        <Tooltip title="Switch Wallpaper">
          <Switch
            color="default"
            checked={wallpaper}
            onChange={handleSwitchWallpaper}
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

export default SwitchWallpaper;
