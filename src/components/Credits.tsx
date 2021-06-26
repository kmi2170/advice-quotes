import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => ({
  credits: {
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.50rem',
    },
  },
  text: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.65rem',
    },
  },
}));

export default function Credits() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Typography
        variant="body2"
        onClick={handleClick}
        className={classes.credits}
      >
        Credits
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography variant="body2" className={classes.text}>
          Advice / https://api.adviceslip.com
        </Typography>
        <Typography variant="body2" className={classes.text}>
          Quotes / https://github.com/lukePeavey/quotable
        </Typography>
        <Typography variant="body2" className={classes.text}>
          Wallpaper /
        </Typography>
        <Typography variant="body2" className={classes.text}>
          Mountains Photo by Simon Berger from Pexels
        </Typography>
        {/* 
        <Typography variant="body2" className={classes.text}>
          Town Photo by Yelena Odintsova from Pexels
        </Typography>
        */}
        <Typography variant="body2" className={classes.text}>
          Flowers Photo by Ellie Burgin from Pexels
        </Typography>
      </Popover>
    </>
  );
}
