import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import pc1Image from '../assets/pc1.PNG';
import pc2Image from '../assets/pc2.PNG';
import pc3Image from '../assets/pc3.PNG';

function Products() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Our Products</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <img src={pc1Image} alt="PC 1" style={{ width: '100%' }} />
          <Typography variant="h6">Gaming PC 1</Typography>
          <Typography variant="body2">Perfect gaming PC that meets all your gaming needs!</Typography>
          <Typography variant="body2">Price: $950.99</Typography>
          <Button variant="contained" color="primary">Add to Cart</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={pc2Image} alt="PC 2" style={{ width: '100%' }} />
          <Typography variant="h6">Gaming PC 2</Typography>
          <Typography variant="body2">Powerful gaming PC for ultimate gaming experience!</Typography>
          <Typography variant="body2">Price: $870.99</Typography>
          <Button variant="contained" color="primary">Add to Cart</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={pc3Image} alt="PC 3" style={{ width: '100%' }} />
          <Typography variant="h6">Gaming PC 3</Typography>
          <Typography variant="body2">Our best PC for the competitive gamers!</Typography>
          <Typography variant="body2">Price: $1100.00</Typography>
          <Button variant="contained" color="primary">Add to Cart</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Products;
