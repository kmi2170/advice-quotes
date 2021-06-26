import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { contentType } from '../pages/index';

const useStyles = makeStyles((theme: Theme) => ({
  textBox: {
    display: 'block',
    height: '30vh',
    overflowY: 'auto',
  },
  content: {
    //fontFamily: 'Raleway',
    fontFamily: 'Oswald',
    //fontFamily: 'Viaoda Libre',
    // fontFamily: 'Playfair Display',
    //fontSize: '2.25rem',
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: '1.25rem',
    //   // '@media (orientation: landscape)': {
    //   //   fontSize: '1.25rem',
    //   // },
    // },
    [theme.breakpoints.down('xs')]: {
      '@media (orientation: portrait)': {
        fontSize: '1.0rem',
      },
    },
  },
}));

interface CardContentProps {
  content: contentType;
  isButtonSelected: boolean[];
}

const CardContent: React.FC<CardContentProps> = ({
  content,
  isButtonSelected,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.textBox}>
      {isButtonSelected[0] && content !== undefined ? (
        <Typography
          className={classes.content}
          // className={`${classes.contetn} ${styles.fadeInText}`}
          variant="h5"
          align="center"
        >
          {content}
        </Typography>
      ) : isButtonSelected[1] && content !== undefined ? (
        <div>
          <Typography
            className={classes.content}
            // className={`${classes.contetn} ${styles.fadeInText}`}
            variant="h5"
            align="center"
          >
            {content['content']}
          </Typography>
          <Typography
            className={classes.content}
            // className={`${classes.contetn} ${styles.fadeInText}`}
            variant="h6"
            align="center"
            style={{ fontStyle: 'italic', marginTop: '1rem' }}
          >
            {content['author']}
          </Typography>
          {/*
           */}
        </div>
      ) : null}
    </div>
  );
};

export default CardContent;

// interface AdviceSearchProps {
//   onSubmitHandler: () => void;
// }
// const AdviceSearch: React.FC<AdviceSearchProps> = ({ onSubmitHandler }) => {
//   return (
//     <form noValidate autoComplete="off">
//       <TextField id="searchForm" label="Search Keyword" variant="outlined" />
//       <Typography variant="body2" color="textSecondary">
//         Only SINGLE WORD is accepted.
//       </Typography>
//     </form>
//   );
// };
