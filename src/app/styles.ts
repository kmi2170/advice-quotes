"use client";

import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }) => ({
  flexGrow: 1,
  position: "relative",
  width: "100vw",
  height: "100vh",
  backgroundImage:
    "radial-gradient( rgba(233, 233, 233, 1),rgba(114, 114, 114, 1))",
  zIndex: 10,
}));
