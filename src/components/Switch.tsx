import Switch from "@material-ui/core/Switch";
import { Grid, Typography, Tooltip } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setWallpaper, selectAdvice } from "../features/adviceSlice";

const useStyles = makeStyles((theme: Theme) => ({
  switchName1: {},
  switchName2: {},
}));

const SwitchComponent: React.FC = () => {
  const classes = useStyles();

  const { wallpaper } = useAppSelector(selectAdvice);
  const dispatch = useAppDispatch();

  const handleChangeWallpaper = () => dispatch(setWallpaper(null));

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
            onChange={handleChangeWallpaper}
            inputProps={{ "aria-label": "switch the wallpaer" }}
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
