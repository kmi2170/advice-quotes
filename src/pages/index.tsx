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
import { useCookies } from 'react-cookie';

const url_advice = 'https://api.adviceslip.com/advice';

const fetchAdvice = async () => {
  try {
    const { data } = await axios(url_advice);
    let advice = data.slip.advice;

    if (checkString(advice)) {
      console.log('find string to filter out', advice);
      advice = filterOut(url_advice);
    }

    console.log('fetchAdvice');
    return advice;
  } catch (error) {
    console.error();
  }
};

const checkString = (string: string): boolean => {
  return string.toLowerCase().includes('sex');
};

const filterOut = async (url: string) => {
  let count = 0;
  let advice: string;
  while (count < 30) {
    await new Promise((cb) => setTimeout(cb, 1000));

    const { data } = await axios(url);
    advice = data.slip.advice;

    if (!checkString(advice)) break;

    count++;
  }
  return advice;
};

const url_quotes = 'https://api.quotable.io/random';

const fetchQuote = async () => {
  try {
    const { data } = await axios(url_quotes);
    const { content, author } = data;
    console.log('fetchQuote');
    // console.log({ content, author });
    return { content, author };
  } catch (error) {
    console.error();
  }
};

const fetchQuoteCategory = async (category: string) => {
  try {
    const url = `${url_quotes}?tags=${category}`;
    const { data } = await axios(url);
    const { content, author } = data;
    console.log('fetchQuoteCategory, url', url);
    // console.log({ content, author });
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

  const [content, setContent] = useState<contentType>(undefined);

  const [cookies, setCookie] = useCookies(['user']);

  const [wallpaper, setWallpaper] = useState<boolean>(false);

  const [isButtonSelected, setIsButtonSelected] = useState<boolean[]>([
    true,
    false,
  ]);

  const [selectedFetcher, setSelectedFetcher] = useState<boolean[]>(undefined);

  const [category, setCategory] = useState<string>('all');

  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchFunc = async (
    state: string | {},
    setState: (state: string | {}) => void,
    fetcher: (category?: string) => Promise<any>,
    category?: string
  ) => {
    try {
      setisLoading(true);

      let newState = category ? await fetcher(category) : await fetcher();

      if (newState == state && !category) {
        let count = 0;
        while (count < 20) {
          await new Promise((cb) => setTimeout(cb, 1000));
          newState = await fetcher();

          console.log(count, newState);
          if (newState != state) break;
          count++;
        }
      }

      setState(newState);

      setisLoading(false);
    } catch (error) {
      /* handle error */
      setIsError(true);
      console.log(error);
    }
  };

  const cookiesOptions = {
    path: '/',
    maxAge: 3600,
    sameSite: true,
  };

  const setCookieWallpaper = (value: boolean): void => {
    setCookie('wallpaper', value, cookiesOptions);
  };

  const setCookieButton = (value: boolean[]): void => {
    setCookie('button', value, cookiesOptions);
  };

  useEffect(() => {
    if (!cookies.wallpaper) {
      setCookieWallpaper(wallpaper);
    } else if (typeof JSON.parse(cookies.wallpaper) === 'boolean') {
      setWallpaper(JSON.parse(cookies.wallpaper));
      // console.log('wallpaper ', wallpaper);
    } else {
      setCookieWallpaper(wallpaper);
    }

    if (!cookies.button) {
      setCookieButton(isButtonSelected);
      setSelectedFetcher(isButtonSelected);
    } else if (typeof cookies.button === 'object') {
      setIsButtonSelected(cookies.button);
      setSelectedFetcher(cookies.button);
      console.log('cookies ', cookies.button);
    } else {
      setCookieButton(isButtonSelected);
      setSelectedFetcher(isButtonSelected);
    }
  }, []);

  return (
    <div
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
            setCookieButton={setCookieButton}
            setSelectedFetcher={setSelectedFetcher}
            setCategory={setCategory}
          />
          <div className={classes.textWrapper}>
            <CardComponent
              content={content}
              isButtonSelected={isButtonSelected}
              selectedFetcher={selectedFetcher}
              fetchFuncAdvice={() =>
                fetchFunc(content, setContent, fetchAdvice)
              }
              fetchFuncQuote={() => fetchFunc(content, setContent, fetchQuote)}
              fetchFuncQuoteCategory={() =>
                fetchFunc(content, setContent, fetchQuoteCategory, category)
              }
              isLoading={isLoading}
              isError={isError}
              category={category}
              setCategory={setCategory}
            />
          </div>
          <Grid container justify="space-around" alignItems="center">
            <Grid item>
              <div className={classes.switchWrapper}>
                <SwitchComponent
                  state={wallpaper}
                  setState={setWallpaper}
                  setCookieWallpaper={setCookieWallpaper}
                />
              </div>
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
    backgroundSize: 'fit',
    // backgroundSize: 'contain',
  },
  wallpaperNature: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,20,0,1.0), rgba(0,50,0,0.0), rgba(0,20,1.0)), url("/images/flowers1.jpg")',
  },
  wallpaperTown: {
    backgroundImage:
      // 'linear-gradient(to bottom, rgba(0,0,0,1.0), rgba(255,255,255,0.0), rgba(0,0,0,1.0)), url("/images/sea_night_2.jpg"))',',
      // 'linear-gradient(to bottom, rgba(0,0,0,1.0), rgba(0,20,0,0.0), rgba(0,0,0,0.6)), url("/images/town1.jpg")',
      'linear-gradient(to bottom, rgba(0,0,0,1.0), rgba(0,20,0,0.0), rgba(0,0,0,1.0)), url("/images/mountains1.jpg")',
  },
  appTitleWrapper: {
    paddingTop: '1.0rem',
    paddingBottom: '1.0rem',
  },
  textWrapper: {
    marginTop: '1.0rem',
  },
  switchWrapper: {
    marginTop: '0.3rem',
    // backgroundColor: 'white',
    backgroundColor: 'rgba(180,180,255,0.8)',
    padding: '0 0.5rem',
    borderRadius: '0.5rem',
  },
  creditWrapper: {},

  footerWrapper: {
    marginTop: '1.0rem',
  },
}));
