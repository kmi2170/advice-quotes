import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { keyframes, styled } from "@mui/material/styles";
import { API_NAMES, ApiNameType, DataResponseType } from "../../../api/types";

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

const Content = ({
  apiName,
  data,
}: {
  apiName: ApiNameType;
  data?: DataResponseType;
}) => {
  const renderContent = (apiName, data) => {
    switch (apiName) {
      case API_NAMES.ADVICE:
        return <DisplayContent content={data.content} />;
      case API_NAMES.QUOTES:
        return (
          <DisplayContent content={data.content} secondContent={data.author} />
        );
      case API_NAMES.FORTUNE_COOKIE:
        return <DisplayContent content={data.content} />;
      default:
        return "Not Found";
    }
  };

  return <Animation>{renderContent(apiName, data)}</Animation>;
};

export default Content;
const DisplayContent = ({
  content,
  secondContent,
}: {
  content: string;
  secondContent?: string;
}) => {
  return (
    <Box sx={{ mt: "2rem", mb: "1rem" }}>
      <Typography
        variant="h3"
        component="p"
        align="center"
        sx={{ fontWeight: "bold" }}
      >
        {content}
      </Typography>
      {secondContent && (
        <Typography
          variant="h4"
          component="p"
          align="center"
          sx={{ fontWeight: "bold", mt: "2rem" }}
        >
          {secondContent}
        </Typography>
      )}
    </Box>
  );
};
