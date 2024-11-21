import Button from "@mui/material/Button";

import {
  API_CATEGORIES,
  API_NAMES,
  ApiCategoryType,
  ApiNameType,
} from "../../../api/types";
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

const CategoryButton = styled(Button)({
  minWidth: "7rem",
  color: "orange",
  borderColor: "orange",
  borderWidth: "4px",
  fontWeight: "bold",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  "&:hover": {
    borderWidth: "4px",
    borderColor: "orange",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  "&:disabled": {
    color: "lightgrey",
    borderColor: "lightgrey",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

type ButtonsProps = {
  category: ApiCategoryType;
  handleChangeCategory: (category: ApiCategoryType) => void;
  api: ApiNameType;
  handleChangeApi: (api: ApiNameType) => void;
};

const Buttons = (props: ButtonsProps) => {
  const { category, api, handleChangeCategory, handleChangeApi } = props;
  return (
    <>
      <ButtonGroup>
        <CategoryButton
          variant="outlined"
          size="large"
          onClick={() => handleChangeCategory(API_CATEGORIES.PRACTICAL)}
          disabled={category === API_CATEGORIES.PRACTICAL}
          sx={{}}
        >
          Practical
        </CategoryButton>
        <CategoryButton
          variant="outlined"
          size="large"
          onClick={() => handleChangeCategory(API_CATEGORIES.FUN)}
          disabled={category === API_CATEGORIES.FUN}
          sx={{}}
        >
          Fun
        </CategoryButton>
      </ButtonGroup>
      {category === API_CATEGORIES.PRACTICAL ? (
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
          <ApiButton
            variant="contained"
            size="large"
            onClick={() => handleChangeApi(API_NAMES.LIFE_HACKS)}
            disabled={api === API_NAMES.LIFE_HACKS}
            sx={{
              backgroundColor: "mediumaquamarine",
            }}
          >
            Life Hacks
          </ApiButton>
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <ApiButton
            variant="contained"
            size="large"
            onClick={() => handleChangeApi(API_NAMES.FORTUNE_COOKIE)}
            disabled={api === API_NAMES.FORTUNE_COOKIE}
            sx={{
              color: "black",
              backgroundColor: "darkorange",
            }}
          >
            Fortune Cookie
          </ApiButton>
          <ApiButton
            variant="contained"
            size="large"
            onClick={() => handleChangeApi(API_NAMES.USELESS_FACTS)}
            disabled={api === API_NAMES.USELESS_FACTS}
            sx={{
              color: "black",
              backgroundColor: "lightcyan",
            }}
          >
            Useless Facts
          </ApiButton>
          <ApiButton
            variant="contained"
            size="large"
            onClick={() => handleChangeApi(API_NAMES.JESTER)}
            disabled={api === API_NAMES.JESTER}
            sx={{
              color: "black",
              backgroundColor: "palegoldenrod",
            }}
          >
            Joke
          </ApiButton>
        </ButtonGroup>
      )}
    </>
  );
};

export default Buttons;
