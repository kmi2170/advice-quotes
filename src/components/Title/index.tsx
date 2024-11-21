import Typography from "@mui/material/Typography";

import { API_NAMES, ApiNameType } from "../../api/types";

const Title = ({ apiName }: { apiName: ApiNameType }) => {
  const renderTitle = (type: ApiNameType) => {
    switch (type) {
      case API_NAMES.ADVICE:
        return "Advice";
      case API_NAMES.QUOTES:
        return "Quote";
      case API_NAMES.LIFE_HACKS:
        return "Life Hacks";
      case API_NAMES.FORTUNE_COOKIE:
        return "Fortune Cookie";
      case API_NAMES.USELESS_FACTS:
        return "Useless Facts";
      case API_NAMES.JESTER:
        return "Joke";
    }
  };

  return (
    <Typography variant="h3" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
      {renderTitle(apiName)}
    </Typography>
  );
};

export default Title;
