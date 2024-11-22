import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { memo } from "react";
import Button from "@mui/material/Button";
import { keyframes, styled } from "@mui/material/styles";
import { DataResponseType } from "../../../api/types";

const button_animation = keyframes`
  0% {
    transform: scale(1) rotate(0deg) translate3d(0, 0, 0);
  }
  50% {
    transform: scale(1.5) rotate(0deg) translate3d(0, 0, 0);
  }
  100% {
    transform:scale(1) rotate(0deg) translate3d(0, 0, 0);
  }
`;

const AnimateButton = styled(Button)({
  padding: "0.5rem 1rem 0.5rem 1rem",
  borderRadius: "0.5rem",
  textTransform: "capitalize",
  "&:active": {
    animation: `${button_animation} 0.7s ease-in-out both`,
  },
  fontSize: "1.25rem",
});

type RefetchType = (
  options?: RefetchOptions
) => Promise<QueryObserverResult<DataResponseType, Error>>;

type GetAnotherButtonProps = {
  refetch?: RefetchType;
};

const GetAnotherButton = (props: GetAnotherButtonProps) => {
  const { refetch } = props;

  const handleGetAnother = async () => {
    if (refetch) refetch();
  };

  return (
    <AnimateButton
      variant="contained"
      color="primary"
      size="small"
      onClick={handleGetAnother}
    >
      Get another
    </AnimateButton>
  );
};

export default memo(GetAnotherButton);
