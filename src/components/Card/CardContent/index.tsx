import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useAppSelector } from '../../../app/hooks';
import { selectAdvice } from '../../../features/adviceSlice';

const useStyles = makeStyles(() => ({
  contentContainer: {
    display: 'block',
    minHeight: '30vh',
    overflowY: 'auto',
  },
  content: {
    fontFamily: 'Acme',
  },
  contentAuthor: {
    fontFamily: 'Acme',
    fontStyle: 'italic',
    marginTop: '1rem',
  },
}));

const CardContent = () => {
  const classes = useStyles();

  const { isTypeButtonSelected, content } = useAppSelector(selectAdvice);

  return (
    <div className={classes.contentContainer}>
      {isTypeButtonSelected &&
        isTypeButtonSelected[0] &&
        content && (
          <Typography className={classes.content} variant="h4" align="center">
            {content}
          </Typography>
        )}

      {isTypeButtonSelected &&
        isTypeButtonSelected[1] &&
        content && (
          <>
            <Typography className={classes.content} variant="h4" align="center">
              {content['content']}
            </Typography>
            <Typography
              className={classes.contentAuthor}
              variant="h4"
              align="center"
            >
              {content['author']}
            </Typography>
          </>
        )}
    </div>
  );
};

export default CardContent;
