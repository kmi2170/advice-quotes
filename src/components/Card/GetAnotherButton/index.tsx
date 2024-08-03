import { memo, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";

import { useAppDispatch } from "../../../store/hooks";
import { fetchAdvice } from "../../../features/adviceAsync";
import styles from "./index.module.css";

const useStyles = makeStyles(() => ({
  button: {
    padding: "0.5rem 1rem 0.5rem 1rem",
    borderRadius: "0.5rem",
    textTransform: "capitalize",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "1.5rem 0 0.25rem 0",
  },
}));

const GetAnotherButton = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleGetAnother = async () => {
    dispatch(fetchAdvice());
  };

  useEffect(() => {
    dispatch(fetchAdvice());
  }, []);

  return (
    <div className={classes.buttonWrapper}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={`${classes.button} ${styles.button}`}
        onClick={handleGetAnother}
      >
        <Typography variant="h5">Get another!</Typography>
      </Button>
    </div>
  );
};

export default memo(GetAnotherButton);
