import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, Theme } from "@material-ui/core/styles";

import CardContent from "./CardContent";
import GetAnotherButton from "./GetAnotherButton";
import { useAppSelector } from "../../store/hooks";
import { selectAdvice } from "../../features/adviceSlice";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
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
  },
}));

const CardComponent = () => {
  const classes = useStyles();

  const { isLoading, isError } = useAppSelector(selectAdvice);

  return (
    <Card className={classes.card} elevation={6}>
      {!isError && isLoading ? <CircularProgress /> : <CardContent />}
      <GetAnotherButton />
      {isError && (
        <Typography variant="h6" color="error">
          Error. Loading Data Failed. Please try again later.
        </Typography>
      )}
    </Card>
  );
};

export default CardComponent;
