import { useState, memo } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  credits: {
    color: "black",
    background: "lightblue",
    width: "4rem",
    padding: "5px 0 5px 0",
    borderRadius: "4px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.50rem",
    },
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.65rem",
    },
  },
}));

const Credits = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "credits-popover" : undefined;

  return (
    <>
      <Typography
        variant="body2"
        onMouseEnter={handleClick}
        // onMouseLeave={handleClose}
        className={classes.credits}
        align="center"
      >
        Credits
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography variant="body2" className={classes.text}>
          Advice / https://api.adviceslip.com
        </Typography>
        <Typography variant="body2" className={classes.text}>
          Wallpaper / unsplash.com
        </Typography>
      </Popover>
    </>
  );
};

export default memo(Credits);
