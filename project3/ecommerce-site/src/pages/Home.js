import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import pcImage from '../assets/pc.PNG'; 

function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Welcome to Our E-Commerce Store!</Typography>
      <Typography variant="body1" paragraph>
        Explore our wide range of products and find great deals on everything you need.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <img src={pcImage} alt="Gaming PC" style={{ width: '100%' }} /> 
          <Typography variant="h6">Gaming PC</Typography>
          <Typography variant="body2">Powerful gaming PC for ultimate gaming experience. On sale for a limited time!!!</Typography>
          <Typography variant="body2">Price: $999.99</Typography>
          <Button variant="contained" color="primary" component={Link} to="/products">
            View More Products
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
