"use client";

import { useState } from "react";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Credits = () => {
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

  return (
    <Box
      sx={{
        marginTop: "1.5rem",
        width: "80vw",
        maxWidth: "1024px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Typography
        variant="body2"
        onMouseEnter={handleClick}
        align="center"
        sx={(theme) => ({
          color: "black",
          background: "lightblue",
          width: "4rem",
          padding: "5px 0 5px 0",
          borderRadius: "4px",
          [theme.breakpoints.down("sm")]: {
            width: "3rem",
            fontSize: "0.50rem",
          },
        })}
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
        <Typography
          variant="body1"
          sx={(theme) => ({
            padding: "0.75rem 1.0rem 0.25rem 1.0rem",
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.75rem",
            },
          })}
        >
          Advice / https://api.adviceslip.com
        </Typography>
        <Typography
          variant="body1"
          sx={(theme) => ({
            padding: "0.25rem 1.0rem 0.75rem 1.0rem",
            [theme.breakpoints.down("sm")]: {
              fontSize: "0.75rem",
            },
          })}
        >
          Wallpaper / unsplash.com
        </Typography>
      </Popover>
    </Box>
  );
};

export default Credits;
