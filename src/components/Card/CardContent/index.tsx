import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import LoadingIndicator from "../../LoadingIndicator";
import { ApiNameType, DataResponseType } from "../../../api/types";
import Content from "./Content";

const CartContentWrapper = styled("div")({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "min(500px, 40vh)",
});

type CardContentProps = {
  isFetching: boolean;
  isError: boolean;
  data?: DataResponseType;
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
