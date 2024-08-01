import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { useAppSelector } from "../../../store/hooks";
import { selectAdvice } from "../../../features/adviceSlice";

const useStyles = makeStyles(() => ({
  contentContainer: {
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "30vh",
  },
  content: {
    fontWeight: "bold",
  },
}));

const CardContent = () => {
  const classes = useStyles();

  const { content } = useAppSelector(selectAdvice);

  return (
    <div className={classes.contentContainer}>
      <Typography className={classes.content} variant="h3" align="center">
        {content}
      </Typography>
    </div>
  );
};

export default CardContent;
