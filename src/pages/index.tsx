import { useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';

import { Container, Grid, Typography } from '@material-ui/core';
import { useStyles } from '../styles/Home.styles';

import { AdviceContext } from '../context';
import { actionTypes } from '../context/actionTypes';

import SEO from '../components/SEO';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';
import Card from '../components/Card/Card';
import Switch from '../components/Switch';
import Credits from '../components/Credits';
import Footer from '../components/Footer';

const cookiesOptions = {
  path: '/',
  maxAge: 2600000,
  sameSite: true,
};

const Home: React.FC = () => {
  const classes = useStyles();

  const { state, dispatch } = useContext(AdviceContext);

  const [cookies, setCookie] = useCookies(['button', 'wallpaper']);

  useEffect(() => {
    const payload =
      cookies.button && typeof cookies.button === 'object'
        ? cookies.button
        : [true, false];
    dispatch({
      type: actionTypes.SET_IS_BUTTON_SELECTED,
      payload: payload,
    });
    // if (cookies.button && typeof cookies.button === 'object') {
    //   dispatch({
    //     type: actionTypes.SET_IS_BUTTON_SELECTED,
    //     payload: cookies.button,
    //   });
    // }

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
    setCookie('button', state.isButtonSelected, cookiesOptions);
  }, [state.isButtonSelected, setCookie]);

  useEffect(() => {
    setCookie('wallpaper', state.wallpaper, cookiesOptions);
  }, [state.wallpaper, setCookie]);

  return (
    <div className={classes.root}>
      <SEO />
      <Container
        maxWidth="lg"
        className={`${classes.container} ${
          state.wallpaper ? classes.wallpaper1 : classes.wallpaper2
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
        <ButtonGroup />

        <div className={classes.cardContainer}>
          <Card />
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
