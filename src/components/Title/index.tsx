import Typography from "@mui/material/Typography";

import { API_NAMES, ApiNameType } from "../../api/types";

const Title = ({ apiName }: { apiName: ApiNameType }) => {
  const renderTitle = (type: ApiNameType) => {
    switch (type) {
      case API_NAMES.ADVICE:
        return "Advice";
      case API_NAMES.QUOTES:
        return "Quote";
    }
  };

  return (
    <Typography variant="h3" sx={{ fontStyle: "italic", fontWeight: "bold" }}>
      {renderTitle(apiName)}
    </Typography>
  );
};

export default Title;
