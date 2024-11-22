import Typography from "@mui/material/Typography";

import { keyframes, styled } from "@mui/material/styles";
import {
  AdviceResponseType,
  API_NAMES,
  ApiNameType,
  FortuneCookieResponseType,
  QuotesResponseType,
} from "../../../api/types";

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

const Animation = styled("div")({
  animation: `${fadeIn} 1s ease-out`,
});

const AdviceContent = ({ content }: AdviceResponseType) => {
  return (
    <Typography
      variant="h3"
      component="p"
      align="center"
      sx={{ fontWeight: "bold" }}
    >
      {content}
    </Typography>
  );
};

const QuoteContent = ({ content, author }: QuotesResponseType) => {
  return (
    <>
      <Typography
        variant="h3"
        component="p"
        align="center"
        sx={{ fontWeight: "bold", mb: "2rem" }}
      >
        {content}
      </Typography>
      <Typography
        variant="h4"
        component="p"
        align="center"
        sx={{ fontWeight: "bold" }}
      >
        {author}
      </Typography>
    </>
  );
};

const FortuneCookieContent = ({ content }: FortuneCookieResponseType) => {
  const _content = content?.split(":")?.[1];
  const text = _content?.split("'")?.[1];
  return (
    <Typography
      variant="h3"
      component="p"
      align="center"
      sx={{ fontWeight: "bold" }}
    >
      {text}
    </Typography>
  );
};

const Content = ({
  apiName,
  data,
}: {
  apiName: ApiNameType;
  data: AdviceResponseType | QuotesResponseType | FortuneCookieResponseType;
}) => {
  const renderContent = (apiName, data) => {
    switch (apiName) {
      case API_NAMES.ADVICE:
        return <AdviceContent content={data.content} />;
      case API_NAMES.QUOTES:
        return <QuoteContent content={data.content} author={data.author} />;
      case API_NAMES.FORTUNE_COOKIE:
        return <FortuneCookieContent content={data.content} />;
      default:
        return "Not Found";
    }
  };

  return <Animation>{renderContent(apiName, data)}</Animation>;
};

export default Content;
