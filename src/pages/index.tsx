import { useState, useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';

import { Container, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../styles/Home.styles';

import { AdviceContext } from '../context';
import { actionTypes } from '../context/actionTypes';

import SEO from '../components/SEO';
import ButtonGroup from '../components/ButtonGroup';
import Card from '../components/Card/Card';
import Switch from '../components/Switch';
import Credits from '../components/Credits';
import Footer from '../components/Footer';

import { fetchAdvice } from '../api/lib/fetchAdvice';
import { fetchQuotes } from '../api/lib/fetchQuotes';

import { ContentType } from '../api/types';

const Home: React.FC = () => {
  const classes = useStyles();

  const { state, dispatch } = useContext(AdviceContext);

  const [content, setContent] = useState<ContentType>(undefined);

  const [cookies, setCookie] = useCookies(['button', 'wallpaper']);

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

  const setCookieButton = (value: boolean[]): void => {
    setCookie('button', value, cookiesOptions);
  };

  useEffect(() => {
    if (
      cookies.wallpaper &&
      typeof JSON.parse(cookies.wallpaper) === 'boolean'
    ) {
      dispatch({
        type: actionTypes.SET_WALLPAPER,
        payload: JSON.parse(cookies.wallpaper),
      });
    }
  }, []);

  useEffect(() => {
    setCookie('wallpaper', state.wallpaper, cookiesOptions);
  }, [state.wallpaper]);

  useEffect(() => {
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
    <div className={classes.root}>
      <SEO />
      <Container
        maxWidth="lg"
        className={`${classes.container} ${
          state.wallpaper ? classes.wallpaperNature : classes.wallpaperTown
        }`}
      >
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
              <Switch />
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
