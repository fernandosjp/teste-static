// material-ui
import { Grid, Typography } from '@mui/material';

// ==============================|| SAMPLE PAGE ||============================== //

const Home = () => (
  <Grid container rowSpacing={0.5} columnSpacing={1.0}>
    <Grid item>
    <Typography variant="h4">Welcome to site</Typography>
    </Grid>
  </Grid>
);

export default Home;