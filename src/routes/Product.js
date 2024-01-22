// material-ui
import { Grid, Typography } from '@mui/material';

// ==============================|| SAMPLE PAGE ||============================== //

const Product = () => (
  <Grid container rowSpacing={0.5} columnSpacing={1.0}>
    <Grid item>
    <Typography variant="h4">Products</Typography>
    <Typography variant="body2">
        This is a simple expense manager application. It is a web application that allows users to manage their expenses.
    </Typography>
    <Typography variant="h4">How to use it?</Typography>
    <Typography variant="body2">
        <ul>
        <li>First, you need to add you expenses in Add Expense Page.</li>
        <li>Then you can see all you expenses within the Expense History Page</li>
        <li>And also have access to management dashboards on Dashboard Page</li>
        <li>Finally, you have control over your expeneses :) .</li>
        </ul>
    </Typography> 
    </Grid>
  </Grid>
);

export default Product;