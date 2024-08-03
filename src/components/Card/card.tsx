import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import CardContent from "./CardContent";
import GetAnotherButton from "./GetAnotherButton";
import { useAppSelector } from "../../store/hooks";
import { selectAdvice } from "../../features/adviceSlice";

export const CardComponent = () => {
  const { isError } = useAppSelector(selectAdvice);

  return (
    <Card
      elevation={6}
      sx={{
        width: "80vw",
        maxWidth: "1024px",
        minHeight: "50vh",
        padding: "1rem",
        paddingTop: "1.5rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        backgroundImage:
          "linear-gradient(to bottom, rgb(255,255,255,1.0),rgba(255,255,255,0.0))",
      }}
    >
      <CardContent />
      <GetAnotherButton />
      {isError && (
        <Typography variant="h6" color="error">
          Error. Loading Data Failed. Please try again later.
        </Typography>
      )}
    </Card>
  );
};
