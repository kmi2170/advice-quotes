import { useState, useEffect } from 'react';

import axios from 'axios';
import { Grow, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { GetServerSideProps, GetStaticProps } from 'next';

import SEO from '../components/SEO';
import AppTitle from '../components/AppTitle';
import ButtonGroup from '../components/ButtonGroup';
import Advice from '../components/Advice';
import Footer from '../components/Footer';

const url = 'https://api.adviceslip.com/advice';

const fetcher = async (url: string) => {
  try {
    const { data } = await axios(url);
    // console.log(data);
    // console.log(data.slip.advice);

    return data;
  } catch (error) {
    console.error();
  }
};

const Home: React.FC = ({ res }) => {
  const classes = useStyles();

  const [advice, setAdvice] = useState<string>('');
  const [isLoading, setisLoading] = useState<boolean>(false);

  const [isRandom, setIsRandom] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchFunc = async (url: string) => {
    try {
      setisLoading(true);

      // const res = await fetcher(url);
      let adviceSlip = res.slip.advice;
      console.log('new ', adviceSlip);

      let count = 0;
      while (adviceSlip == advice) {
        // console.log('old', advice);
        // console.log('new ', adviceSlip);
        const res = await fetcher(url);
        adviceSlip = res.slip.advice;

        count++;
        console.log(count);
        await new Promise((cb) => setTimeout(cb, 2000));
      }

      setAdvice(adviceSlip);
      setisLoading(false);
      // if (res.slip.advice == advice) {
      //   console.log('old', advice);
      //   console.log('new ', res.slip.advice);
      // }
    } catch (error) {
      /* handle error */
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFunc(url);
  }, []);

  return (
    <div className={classes.root}>
      <SEO />
      {/*
      <Grow in>
      </Grow>
       */}
      <Container>
        <div className={classes.appTitleWrapper}>
          <AppTitle />
        </div>
        <ButtonGroup isRandom={isRandom} setIsRandom={setIsRandom} />
        <div className={classes.adviceWrapper}>
          <Advice
            advice={advice}
            url={url}
            fetchFunc={fetchFunc}
            isLoading={isLoading}
            isRandom={isRandom}
            isError={isError}
          />
        </div>
        <div className={classes.footerWrapper}>
          <Footer />
        </div>
        {/* 
        <Grid container justify="center" alignItems="center" spacing={0}>
          <Grid item xs={12}></Grid>
        </Grid>
      */}
      </Container>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  // export const getStaticProps: GetStaticProps = async () => {
  const res = await fetcher(url);

  return {
    props: {
      res,
    },
  };
};

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
    //   'linear-gradient(to bottom, rgb(0,0,0,1.0), rgba(255,255,255,0.0)))',
    backgroundImage:
      'linear-gradient(to bottom, rgb(0,0,0,1.0),rgba(255,255,255,0.0), rgb(0,0,0,1.0)), url("/images/sea1.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    //backgroundSize: 'fit',
    //backgroundSize: 'fit',
  },
  appTitleWrapper: {
    paddingTop: '1.5rem',
    paddingBottom: '1.0rem',
  },
  adviceWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0.5rem',
  },
  footerWrapper: {
    marginTop: '1.5rem',
  },
}));
