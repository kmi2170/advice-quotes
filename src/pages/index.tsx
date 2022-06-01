import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './index.styles';

import { useAppSelector } from '../app/hooks';
import ButtonGroup from '../components/ButtonGroup';
import Card from '../components/Card';
import SwitchWallpaper from '../components/SwitchWallpaper';
import Credits from '../components/Credits';
import Footer from '../components/Footer';

const Home = () => {
  const classes = useStyles();

  const wallpaper = useAppSelector(state => state.advice.wallpaper);
  // When selectAdvice is updated, it always cause to re-render component
  // const wallpaper = useAppSelector(selectAdvice, advice => advice.wallpaper);
  console.log('pages/index');

  return (
    <div className={classes.root}>
      <Container
        maxWidth="lg"
        className={`${classes.container} ${
          wallpaper ? classes.wallpaper1 : classes.wallpaper2
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
          <Grid item className={classes.switchContainer}>
            <SwitchWallpaper />
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
