import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

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

type CardContentProps = {
  content?: string;
  isFetching: boolean;
};

const CardContent = (props: CardContentProps) => {
  const { isFetching, content } = props;

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
      {isFetching ? (
        <CircularProgress size={50} thickness={8} />
      ) : (
        <Typography
          variant="h3"
          component="p"
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
