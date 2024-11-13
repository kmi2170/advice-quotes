import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { memo } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { keyframes, styled } from "@mui/material/styles";

const rotate = keyframes`
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
    scale: 1.0;
  }
  50% {
    transform: rotate(10deg) translate3d(0, 0, 0);
    scale: 1.1;
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
    scale: 1.0;
  }
`;

const AnimateButton = styled(Button)({
  padding: "0.5rem 1rem 0.5rem 1rem",
  borderRadius: "0.5rem",
  textTransform: "capitalize",
  "&:active": {
    animation: `${rotate} 0.7s ease-in-out both`,
  },
  fontSize: "1.25rem",
});

type RefetchType = (
  options?: RefetchOptions
) => Promise<QueryObserverResult<string, Error>>;

type GetAnotherButtonProps = {
  refetch: RefetchType;
};

const GetAnotherButton = (props: GetAnotherButtonProps) => {
  const { refetch } = props;

  const handleGetAnother = async () => {
    refetch();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "1.5rem 0 0.25rem 0",
      }}
    >
      <AnimateButton
        variant="contained"
        color="primary"
        size="small"
        onClick={handleGetAnother}
        sx={{}}
      >
        Get another
      </AnimateButton>
    </Box>
  );
};

export default memo(GetAnotherButton);
