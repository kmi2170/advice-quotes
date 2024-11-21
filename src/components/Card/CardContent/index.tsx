import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import LoadingIndicator from "../../LoadingIndicator";
import { ApiNameType } from "../../../api/types";
import Content from "./Content";

const CartContentWrapper = styled("div")({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "30vh",
  maxHeight: "50vh",
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
    <CartContentWrapper>
      {isFetching && <LoadingIndicator />}

      {!isFetching && !isError && (
        <Content apiName={apiName} content={content} />
      )}

      {!isFetching && isError && (
        <Typography variant="h4" color="error" align="center">
          Fetching Data Failed. Please try again later.
        </Typography>
      )}
    </CartContentWrapper>
  );
};

export default CardContent;
