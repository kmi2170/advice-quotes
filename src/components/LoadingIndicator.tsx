import { keyframes, styled } from "@mui/material/styles";

const pulseL = keyframes`
  0% {
     opacity: 1.0;
  }
  50% {
     opacity: 0.3;
  }
  100% {
     opacity: 0.3;
  }
`;

const pulseM = keyframes`
  0% {
     opacity: 0.3;
  }
  50% {
     opacity: 1.0;
  }
  100% {
     opacity: 0.3;
  }
`;

const pulseR = keyframes`
  0% {
     opacity: 0.3;
  }
  50% {
     opacity: 0.3;
  }
  100% {
     opacity: 1.0;
  }
`;

const Dot = styled("div")({
  display: "inline-block",
  margin: "0 0.5rem",
  width: "1.0rem",
  height: "1.0rem",
  borderRadius: "50%",
  backgroundColor: "purple",
});

const DotIndicatorLeft = styled(Dot)({
  animation: `${pulseL} 0.3s infinite ease-in-out`,
});

const DotIndicatorMiddle = styled(Dot)({
  animation: `${pulseM} 0.3s infinite ease-in-out`,
});

const DotIndicatorRight = styled(Dot)({
  animation: `${pulseR} 0.3s infinite ease-in-out`,
});

const LoadingIndicator = () => {
  return (
    <>
      <DotIndicatorLeft />
      <DotIndicatorMiddle />
      <DotIndicatorRight />
    </>
  );
};

export default LoadingIndicator;
