import Button from "@mui/material/Button";

import {
  API_CATEGORIES,
  API_NAMES,
  ApiCategoryType,
  ApiNameType,
} from "../../../api/types";
import { styled } from "@mui/material/styles";

const ButtonGroup = styled("div")({
  marginBottom: "2rem",
  width: "60%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ApiButton = styled(Button)({
  "&:disabled": {
    color: "white",
    backgroundColor: "grey",
  },
});

const CategoryButton = styled(Button)({
  "&:disabled": {
    color: "white",
    backgroundColor: "grey",
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
          variant="contained"
          size="large"
          onClick={() => handleChangeCategory(API_CATEGORIES.PRACTICAL)}
          disabled={category === API_CATEGORIES.PRACTICAL}
          sx={{}}
        >
          Practical
        </CategoryButton>
        <CategoryButton
          variant="contained"
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
            color="secondary"
            size="large"
            onClick={() => handleChangeApi(API_NAMES.LIFE_HACKS)}
            disabled={api === API_NAMES.LIFE_HACKS}
            sx={{}}
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
            sx={{}}
          >
            Fortune Cookie
          </ApiButton>
          <ApiButton
            variant="contained"
            size="large"
            onClick={() => handleChangeApi(API_NAMES.USELESS_FACTS)}
            disabled={api === API_NAMES.USELESS_FACTS}
            sx={{}}
          >
            Useless Facts
          </ApiButton>
          <ApiButton
            variant="contained"
            size="large"
            onClick={() => handleChangeApi(API_NAMES.JESTER)}
            disabled={api === API_NAMES.JESTER}
            sx={{}}
          >
            Jester
          </ApiButton>
        </ButtonGroup>
      )}
    </>
  );
};

export default Buttons;
