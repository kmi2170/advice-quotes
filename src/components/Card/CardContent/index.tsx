import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { keyframes, styled } from "@mui/material/styles";
import LoadingIndicator from "../../LoadingIndicator";

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

const AnimateText = styled(Typography)({
  fontWeight: "bold",
  animation: `${fadeIn} 1s ease-out`,
});

type CardContentProps = {
  isFetching: boolean;
  content?: string;
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
        <LoadingIndicator />
      ) : (
        <AnimateText variant="h3" align="center">
          {content}
        </AnimateText>
      )}
    </Box>
  );
};

export default CardContent;
