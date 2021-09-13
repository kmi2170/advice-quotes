import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import SEO from '../components/SEO';
import ButtonGroup from '../components/ButtonGroup';
import Card from '../components/Card';
import SwitchComponent from '../components/Switch';
import Credits from '../components/Credits';
import Footer from '../components/Footer';

import { fetchAdvice } from '../api/lib/fetchAdvice';
import { fetchQuotes } from '../api/lib/fetchQuotes';

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
    maxAge: 2600000,
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
      <Container>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          className={classes.titleApp}
        >
          Advice/Quotes App
        </Typography>
        <ButtonGroup
          isButtonSelected={isButtonSelected}
          setIsButtonSelected={setIsButtonSelected}
          setContent={setContent}
          setCookieButton={setCookieButton}
          setSelectedFetcher={setSelectedFetcher}
          setCategory={setCategory}
        />

        <div className={classes.cardContainer}>
          <Card
            content={content}
            isButtonSelected={isButtonSelected}
            selectedFetcher={selectedFetcher}
            fetchFuncAdvice={() => fetchFunc(content, setContent, fetchAdvice)}
            fetchFuncQuote={() => fetchFunc(content, setContent, fetchQuotes)}
            fetchFuncQuoteCategory={() =>
              fetchFunc(content, setContent, fetchQuotes, category)
            }
            isLoading={isLoading}
            isError={isError}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <div className={classes.switchContainer}>
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
        <div className={classes.footerContainer}>
          <Footer />
        </div>
      </Container>
    </div>
  );
};

export default Home;

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
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'fit',
  },
  titleApp: {
    fontFamily: 'Lobster',
    color: 'white',
    textShadow: '2px 2px #19857b',
    padding: theme.spacing(4, 0),
  },
  wallpaperNature: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,20,0,1.0), rgba(0,50,0,0.0), rgba(0,20,1.0)), url("/images/flowers1.jpg")',
  },
  wallpaperTown: {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0,0,0,1.0), rgba(0,20,0,0.0), rgba(0,0,0,1.0)), url("/images/bamboo1.jpg")',
  },
  cardContainer: {
    marginTop: '1.0rem',
  },
  switchContainer: {
    marginTop: '1.5rem',
    backgroundColor: 'rgba(180,180,255,0.8)',
    padding: '0 0.5rem',
    borderRadius: '0.5rem',
  },

  footerContainer: {
    marginTop: theme.spacing(5),
  },
}));
