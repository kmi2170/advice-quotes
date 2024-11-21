import Typography, { TypographyProps } from "@mui/material/Typography";

import { keyframes, styled } from "@mui/material/styles";
import { API_NAMES, ApiNameType } from "../../../api/types";

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

const BaseContentWithFooter = styled("div")({
  "& footer": {
    marginTop: "2rem",
  },
});

const BaseContentWithoutFooter = styled("div")({
  "& footer": {
    display: "none",
  },
});

const QuoteContent = styled(BaseContentWithFooter)({});

const LifeHacksContent = styled(BaseContentWithoutFooter)({});

const FortuneCookieContent = styled(BaseContentWithoutFooter)({
  "& small": {
    display: "block",
    marginTop: "2rem",
  },
});

const UselessFactsContent = styled(BaseContentWithoutFooter)({});

const JesterContent = styled(BaseContentWithoutFooter)({});

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
          <LifeHacksContent dangerouslySetInnerHTML={{ __html: content }} />
        );
      case API_NAMES.FORTUNE_COOKIE:
        return (
          <FortuneCookieContent dangerouslySetInnerHTML={{ __html: content }} />
        );
      case API_NAMES.USELESS_FACTS:
        return (
          <UselessFactsContent dangerouslySetInnerHTML={{ __html: content }} />
        );
      case API_NAMES.JESTER:
        return <JesterContent dangerouslySetInnerHTML={{ __html: content }} />;
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

export default Content;
