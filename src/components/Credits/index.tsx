import { useState } from "react";

import { Theme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme: Theme) => ({
  creditsContainer: {
    marginTop: "1.5rem",
    width: "80vw",
    maxWidth: "1024px",
    display: "flex",
    justifyContent: "flex-end",
  },
  credits: {
    color: "black",
    background: "lightblue",
    width: "4rem",
    padding: "5px 0 5px 0",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.50rem",
    },
  },
  text: {
    padding: "0.5rem 1.0rem 0.5rem 1.0rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.65rem",
    },
  },
}));

const Credits = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl != null) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "credits-popover" : undefined;

  console.log("credits...");

  return (
    <Box className={classes.creditsContainer}>
      <Typography
        variant="body2"
        onMouseEnter={handleClick}
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
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography variant="body1" className={classes.text}>
          Advice / https://api.adviceslip.com
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Wallpaper / unsplash.com
        </Typography>
      </Popover>
    </Box>
  );
};

export default Credits;
