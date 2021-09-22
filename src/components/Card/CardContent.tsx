import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { RootState } from '../../app/store';
import { useAppSelector } from '../../app/hooks';

const useStyles = makeStyles((theme: Theme) => ({
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

const CardContent: React.FC = () => {
  const classes = useStyles();

  const isButtonSelected = useAppSelector(
    (state: RootState) => state.advice.isButtonSelected
  );
  const content = useAppSelector((state: RootState) => state.advice.content);

  return (
    <div className={classes.contentContainer}>
      {isButtonSelected && isButtonSelected[0] && content ? (
        <Typography className={classes.content} variant="h4" align="center">
          {content}
        </Typography>
      ) : isButtonSelected && isButtonSelected[1] && content ? (
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
      ) : null}
    </div>
  );
};

export default CardContent;
