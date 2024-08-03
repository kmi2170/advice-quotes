import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import makeStyles from "@mui/styles/makeStyles";

import { useAppSelector } from "../../../store/hooks";
import { selectAdvice } from "../../../features/adviceSlice";
import styles from "./index.module.css";

const useStyles = makeStyles(() => ({
  contentContainer: {
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "30vh",
    maxHeight: "50vh",
  },
  content: {
    fontWeight: "bold",
  },
}));

const CardContent = () => {
  const classes = useStyles();

  const { isError, isLoading, content } = useAppSelector(selectAdvice);

  return (
    <div className={classes.contentContainer}>
      {!isError && isLoading ? (
        <CircularProgress />
      ) : (
        <Typography className={styles.content} variant="h3" align="center">
          {content}
        </Typography>
      )}
    </div>
  );
};

export default CardContent;
