import Button from "@mui/material/Button";

import { API_NAMES, ApiNameType } from "../../../api/types";
import { styled } from "@mui/material/styles";

const ButtonGroup = styled("div")(({ theme }) => ({
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
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

const Buttons = (props: ButtonsProps) => {
  const { api, handleChangeApi } = props;
  return (
    <ButtonGroup>
      <ApiButton
        variant="contained"
        size="large"
        onClick={() => handleChangeApi(API_NAMES.ADVICE)}
        disabled={api === API_NAMES.ADVICE}
        sx={{}}
      >
        Advice
      </ApiButton>
      <ApiButton
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => handleChangeApi(API_NAMES.QUOTES)}
        disabled={api === API_NAMES.QUOTES}
        sx={{}}
      >
        Quote
      </ApiButton>
    </ButtonGroup>
  );
};

export default Buttons;
