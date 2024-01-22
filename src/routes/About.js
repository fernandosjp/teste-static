// material-ui
import { Grid, Typography } from '@mui/material';

// ==============================|| SAMPLE PAGE ||============================== //

const About = () => (
  <Grid container rowSpacing={0.5} columnSpacing={1.0}>
    <Grid item>
    <Typography variant="h4">Objective</Typography>
    <Typography variant="body2">
        This is a simple expense manager application. It is a web application that allows users to manage their expenses.
    </Typography>
    <Typography variant="h4">How to use it?</Typography>
    <Typography variant="body2">
        Teste
    </Typography> 
    </Grid>
  </Grid>
);

export default About;