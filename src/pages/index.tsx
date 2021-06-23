import { useState, useEffect } from 'react';

import axios from 'axios';
import { Grow, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

// import { GetServerSideProps, GetStaticProps } from 'next';

import SEO from '../components/SEO';
import AppTitle from '../components/AppTitle';
import ButtonGroup from '../components/ButtonGroup';
import CardComponent from '../components/Card';
import SwitchComponent from '../components/Switch';
import Credits from '../components/Credits';
import Footer from '../components/Footer';

const url_advice = 'https://api.adviceslip.com/advice';

const fetchAdvice = async () => {
  try {
    const { data } = await axios(url_advice);
    console.log('fetchAdvice');
    // console.log(data.slip.advice);
    return data.slip.advice;
  } catch (error) {
    console.error();
  }
};

const url_quotes = 'https://api.quotable.io/random';

const fetchQuote = async () => {
  try {
    const { data } = await axios(url_quotes);
    const { content, author } = data;
    console.log('fetchQuote');
    // console.log({ content, author });
    // return content + '   ' + author;
    return { content, author };
  } catch (error) {
    console.error();
  }
};

export type contentType =
  | string
  | { content: string; author: string }
  | undefined;

const Home: React.FC = () => {
  const classes = useStyles();

  //const [content, setContent] = useState<string | {} | undefined>(null);
  const [content, setContent] = useState<contentType>(undefined);
  const [wallpaper, setWallpaper] = useState<boolean>(false);

  const [isGetAnother, setIsGetAnother] = useState<boolean>(false);
  const [isButtonSelected, setIsButtonSelected] = useState<boolean[]>([
    true,
    false,
  ]);
  // console.log(isButtonSelected);
  console.log(content);

  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  // const [isRandom, setIsRandom] = useState<boolean>(true);

  const fetchFunc = async (
    state: string | {},
    setState: (state: string | {}) => void,
    fetcher: () => Promise<any>
  ) => {
    try {
      setisLoading(true);

      let newState = await fetcher();

      let count = 0;
      while (newState == state) {
        newState = await fetcher();

        count++;
        console.log(count, newState);

        await new Promise((cb) => setTimeout(cb, 1000));
      }

      setState(newState);

      setisLoading(false);
    } catch (error) {
      /* handle error */
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    if (isButtonSelected[0]) {
      fetchFunc(content, setContent, fetchAdvice);
    } else if (isButtonSelected[1]) {
      fetchFunc(content, setContent, fetchQuote);
    }
    setIsGetAnother(false);
  }, [isButtonSelected, isGetAnother]);
  // }, [isButtonSelected]);

  return (
    <div
      //className={classes.root}
      className={`${classes.root}  ${
        wallpaper == true ? classes.wallpaperNature : classes.wallpaperTown
      }`}
    >
      <SEO />
      <Grow in>
        <Container>
          <div className={classes.appTitleWrapper}>
            <AppTitle />
          </div>
          <ButtonGroup
            isButtonSelected={isButtonSelected}
            setIsButtonSelected={setIsButtonSelected}
            setContent={setContent}
          />
          <div className={classes.textWrapper}>
            <CardComponent
              content={content}
              isButtonSelected={isButtonSelected}
              setIsGetAnother={setIsGetAnother}
              // fetchFunc={
              //   isButtonSelected[0]
              //     ? () => fetchFunc(content, setContent, fetchAdvice)
              //     : isButtonSelected[1]
              //     ? () => fetchFunc(content, setContent, fetchQuote)
              //     : null
              // }
              isLoading={isLoading}
              isError={isError}
            />
          </div>
          <Grid container justify="space-around" alignItems="center">
            <Grid item>
              <SwitchComponent state={wallpaper} setState={setWallpaper} />
            </Grid>
            <Grid item>
              <Credits />
            </Grid>
          </Grid>
          <div className={classes.footerWrapper}>
            <Footer />
          </div>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async () => {
//   // export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetcher(url);

//   return {
//     props: {
//       res,
//     },
//   };
// };

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      '@media (orientation: landscape)': {
        backgroundSize: 'auto 100vw',
        height: '100vw',
      },
      '@media (orientation: portrait)': {
        backgroundSize: 'auto 100vh',
        height: '100vh',
      },
    },
    // backgroundImage:
    //   'linear-gradient(to bottom, rgba(0,0,0,1.0), rgba(255,255,255,0.0)))',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    //backgroundSize: 'fit',
    //backgroundSize: 'fit',
  },
  wallpaperNature: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,20,0,1.0), rgba(0,50,0,0.0), rgba(0,20,1.0)), url("/images/flowers1.jpg")',
  },
  wallpaperTown: {
    backgroundImage:
      // 'linear-gradient(to bottom, rgba(0,0,0,1.0), rgba(255,255,255,0.0), rgba(0,0,0,1.0)), url("/images/sea_night_2.jpg")',
      'linear-gradient(to bottom, rgba(0,20,0,1.0), rgba(0,20,0,0.0), rgba(0,20,0,1.0)), url("/images/town1.jpg")',
  },
  appTitleWrapper: {
    paddingTop: '1.0rem',
    paddingBottom: '1.0rem',
  },
  textWrapper: {
    marginTop: '1.0rem',
  },
  switchWrapper: {
    marginTop: '0.5rem',
  },
  creditWrapper: {},

  footerWrapper: {
    marginTop: '1.0rem',
  },
}));
