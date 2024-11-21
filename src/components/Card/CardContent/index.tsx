import Typography, { TypographyProps } from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { keyframes, styled } from "@mui/material/styles";
import LoadingIndicator from "../../LoadingIndicator";
import { API_NAMES, ApiNameType } from "../../../api/types";

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
        <Content apiName={apiName} content={content} />
      )}

      {!isFetching && isError && (
        <Typography variant="h4" color="error" align="center">
          Fetching Data Failed. Please try again later.
        </Typography>
      )}
    </Box>
  );
};

export default CardContent;

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

const QuoteContent = styled("div")({
  "& footer": {
    marginTop: "2rem",
  },
});

const LifeHackContent = styled("div")({
  "& footer": {
    display: "none",
  },
});

const Content = ({
  apiName,
  content,
}: {
  apiName: ApiNameType;
  content: string;
}) => {
  const renderContent = (apiName, content) => {
    switch (apiName) {
      case API_NAMES.ADVICE:
        return content;
      case API_NAMES.QUOTES:
        return <QuoteContent dangerouslySetInnerHTML={{ __html: content }} />;
      case API_NAMES.LIFE_HACKS:
        return (
          <LifeHackContent dangerouslySetInnerHTML={{ __html: content }} />
        );
      default:
        return "Not Found";
    }
  };

  return (
    <AnimateText variant="h3" component="p" align="center">
      {renderContent(apiName, content)}
    </AnimateText>
  );
};
