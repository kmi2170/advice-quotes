import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import LoadingIndicator from "../../LoadingIndicator";
import {
  AdviceResponseType,
  ApiNameType,
  FortuneCookieResponseType,
  QuotesResponseType,
} from "../../../api/types";
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
  data: AdviceResponseType | QuotesResponseType | FortuneCookieResponseType;
  apiName: ApiNameType;
};

const CardContent = (props: CardContentProps) => {
  const { isFetching, isError, data, apiName } = props;

  return (
    <CartContentWrapper>
      {isFetching && <LoadingIndicator />}

      {!isFetching && !isError && <Content apiName={apiName} data={data} />}

      {!isFetching && isError && (
        <Typography variant="h4" color="error" align="center">
          Fetching Data Failed. Please try again later.
        </Typography>
      )}
    </CartContentWrapper>
  );
};

export default CardContent;
