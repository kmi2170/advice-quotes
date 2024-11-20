import Typography, { TypographyProps } from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { keyframes, styled } from "@mui/material/styles";
import LoadingIndicator from "../../LoadingIndicator";
import { ApiType } from "../../../api/types";

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

const AnimateText = styled(Typography)<TypographyProps>({
  fontWeight: "bold",
  animation: `${fadeIn} 1s ease-out`,
});

type CardContentProps = {
  isFetching: boolean;
  content?: string;
  apiType: ApiType;
};

const CardContent = (props: CardContentProps) => {
  const { isFetching, content, apiType } = props;

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
        <AnimateText variant="h3" component="p" align="center">
          {renderContent(apiType, content)}
        </AnimateText>
      )}
    </Box>
  );
};

export default CardContent;

const QuoteContent = styled("div")({
  "& footer": {
    marginTop: "2rem",
  },
});

const renderContent = (type: ApiType, content) => {
  switch (type) {
    case "advice":
      return content;
    case "quote":
      return <QuoteContent dangerouslySetInnerHTML={{ __html: content }} />;
    default:
      return "Not Found";
  }
};
