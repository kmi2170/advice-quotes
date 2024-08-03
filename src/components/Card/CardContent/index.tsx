import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import { useAppSelector } from "../../../store/hooks";
import { selectAdvice } from "../../../features/adviceSlice";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    filter: blur(3px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

const CardContent = () => {
  const { isError, isLoading, content } = useAppSelector(selectAdvice);

  return (
    <Box
      sx={{
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "30vh",
        maxHeight: "50vh",
      }}
    >
      {!isError && isLoading ? (
        <CircularProgress size={50} thickness={8} />
      ) : (
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", animation: `${fadeIn} 1s ease-out` }}
        >
          {content}
        </Typography>
      )}
    </Box>
  );
};

export default CardContent;
