import { useContext } from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { AdviceContext } from '../../context';

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

  const { state } = useContext(AdviceContext);

  return (
    <div className={classes.contentContainer}>
      {state.isButtonSelected[0] && state.content ? (
        <Typography className={classes.content} variant="h4" align="center">
          {state.content}
        </Typography>
      ) : state.isButtonSelected[1] && state.content ? (
        <>
          <Typography className={classes.content} variant="h4" align="center">
            {state.content['content']}
          </Typography>
          <Typography
            className={classes.contentAuthor}
            variant="h4"
            align="center"
          >
            {state.content['author']}
          </Typography>
        </>
      ) : null}
    </div>
  );
};

export default CardContent;
