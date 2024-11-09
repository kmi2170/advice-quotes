import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { memo } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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

type RefetchType = (
  options?: RefetchOptions
) => Promise<QueryObserverResult<string, Error>>;

type GetAnotherButtonProps = {
  refetch: RefetchType;
};

const GetAnotherButton = (props: GetAnotherButtonProps) => {
  const { refetch } = props;

  const handleGetAnother = async () => {
    refetch();
  };

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
