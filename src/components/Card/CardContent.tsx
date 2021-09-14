import { useContext } from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { AdviceContext } from '../../context';

const useStyles = makeStyles((theme: Theme) => ({
  textBox: {
    display: 'block',
    minHeight: '30vh',
    overflowY: 'auto',
  },
  content: {
    // fontFamily: 'Raleway',
    // fontFamily: 'Oswald',
    // fontFamily: 'Jua',
    fontFamily: 'Acme',
    //fontFamily: 'Viaoda Libre',
    // fontFamily: 'Playfair Display',
    //fontSize: '2.25rem',
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: '1.25rem',
    //   // '@media (orientation: landscape)': {
    //   //   fontSize: '1.25rem',
    //   // },
    // },
    // [theme.breakpoints.down('xs')]: {
    //   '@media (orientation: portrait)': {
    //     fontSize: '1.0rem',
    //   },
    // },
  },
}));

const CardContent: React.FC = () => {
  const classes = useStyles();

  const { state } = useContext(AdviceContext);

  return (
    <div className={classes.textBox}>
      {state.isButtonSelected[0] && state.content !== undefined ? (
        <Typography
          className={classes.content}
          // className={`${classes.contetn} ${styles.fadeInText}`}
          variant="h4"
          align="center"
        >
          {state.content}
        </Typography>
      ) : state.isButtonSelected[1] && state.content !== undefined ? (
        <div>
          <Typography
            className={classes.content}
            // className={`${classes.contetn} ${styles.fadeInText}`}
            variant="h4"
            align="center"
          >
            {state.content['content']}
          </Typography>
          <Typography
            className={classes.content}
            // className={`${classes.contetn} ${styles.fadeInText}`}
            variant="h4"
            align="center"
            style={{ fontStyle: 'italic', marginTop: '1rem' }}
          >
            {state.content['author']}
          </Typography>
          {/*
           */}
        </div>
      ) : null}
    </div>
  );
};

export default CardContent;
