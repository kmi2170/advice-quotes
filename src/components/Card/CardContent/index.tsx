import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { useAppSelector } from "../../../app/hooks";
import { selectAdvice } from "../../../features/adviceSlice";

const useStyles = makeStyles(() => ({
  contentContainer: {
    display: "block",
    minHeight: "30vh",
    overflowY: "auto",
  },
  content: {
    fontFamily: "Acme",
  },
  contentAuthor: {
    fontFamily: "Acme",
    fontStyle: "italic",
    marginTop: "1rem",
  },
}));

const CardContent = () => {
  const classes = useStyles();

  const { content } = useAppSelector(selectAdvice);

  return (
    <div className={classes.contentContainer}>
      <Typography className={classes.content} variant="h4" align="center">
        {content}
      </Typography>
    </div>
  );
};

export default CardContent;
