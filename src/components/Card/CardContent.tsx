import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import { ContentType } from '../../api/types';

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

  const isButtonSelected = useSelector<RootState, boolean[]>(
    (state) => state.isButtonSelected
  );
  const content = useSelector<RootState, ContentType>((state) => state.content);

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
