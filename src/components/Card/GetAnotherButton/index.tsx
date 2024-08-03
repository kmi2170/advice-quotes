import { memo, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useAppDispatch } from "../../../store/hooks";
import { fetchAdvice } from "../../../features/adviceAsync";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
`;

const GetAnotherButton = () => {
  const dispatch = useAppDispatch();

  const handleGetAnother = async () => {
    dispatch(fetchAdvice());
  };

  useEffect(() => {
    dispatch(fetchAdvice());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "1.5rem 0 0.25rem 0",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleGetAnother}
        sx={{
          padding: "0.5rem 1rem 0.5rem 1rem",
          borderRadius: "0.5rem",
          textTransform: "capitalize",
          "&:hover": {
            animation: `${rotate} 0.7s ease-in-out both`,
          },
        }}
      >
        <Typography variant="h5">Get another!</Typography>
      </Button>
    </Box>
  );
};

export default memo(GetAnotherButton);
