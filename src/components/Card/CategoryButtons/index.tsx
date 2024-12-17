import Button from "@mui/material/Button";

import { API_NAMES, ApiNameType } from "../../../api/types";
import { styled } from "@mui/material/styles";

const ButtonGroup = styled("div")(({ theme }) => ({
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "60%",
  },
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "0.5rem",
}));

const ApiButton = styled(Button)({
  minWidth: "8rem",
  fontWeight: "bold",
  "&:hover": {},
  "&:disabled": {
    color: "white",
    backgroundColor: "grey",
  },
});

type ButtonsProps = {
  api: ApiNameType;
  handleChangeApi: (api: ApiNameType) => void;
};

const CategoryButtons = (props: ButtonsProps) => {
  const { api, handleChangeApi } = props;
  return (
    <ButtonGroup>
      <ApiButton
        variant="contained"
        size="medium"
        onClick={() => handleChangeApi(API_NAMES.ADVICE)}
        disabled={api === API_NAMES.ADVICE}
        sx={{}}
      >
        Advice
      </ApiButton>
      <ApiButton
        variant="contained"
        color="secondary"
        size="medium"
        onClick={() => handleChangeApi(API_NAMES.QUOTES)}
        disabled={api === API_NAMES.QUOTES}
        sx={{}}
      >
        Quote
      </ApiButton>
      <ApiButton
        variant="contained"
        size="medium"
        onClick={() => handleChangeApi(API_NAMES.FORTUNE_COOKIE)}
        disabled={api === API_NAMES.FORTUNE_COOKIE}
        sx={{ backgroundColor: "darkorange" }}
      >
        Fortune Cookie
      </ApiButton>
    </ButtonGroup>
  );
};

export default CategoryButtons;
