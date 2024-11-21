import Typography, { TypographyProps } from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { keyframes, styled } from "@mui/material/styles";
import LoadingIndicator from "../../LoadingIndicator";
import { API_NAMES, ApiCategoryType, ApiNameType } from "../../../api/types";

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
  isError: boolean;
  content: string;
  apiName: ApiNameType;
};

const CardContent = (props: CardContentProps) => {
  const { isFetching, isError, content, apiName } = props;

  return (
    <Box
      sx={{
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "30vh",
        maxHeight: "50vh",
      }}
    >
      {isFetching && <LoadingIndicator />}

      {!isFetching && !isError && (
        <AnimateText variant="h3" component="p" align="center">
          {renderContent(apiName, content)}
        </AnimateText>
      )}

      {!isFetching && isError && (
        <Typography variant="h6" color="error">
          Fetching Data Failed. Please try again later.
        </Typography>
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

const renderContent = (type: ApiNameType, content: string) => {
  switch (type) {
    case API_NAMES.ADVICE:
      return content;
    case API_NAMES.QUOTES:
      return <QuoteContent dangerouslySetInnerHTML={{ __html: content }} />;
    default:
      return "Not Found";
  }
};
