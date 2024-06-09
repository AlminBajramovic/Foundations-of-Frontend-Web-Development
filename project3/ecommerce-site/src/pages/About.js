import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function About() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1" paragraph>
        At AlkoPC, we are passionate about providing our customers with the best online shopping experience. 
        Our team is dedicated to curating a wide range of products, from the latest pc components to prebuilt PCs,
        ensuring that there's something for everyone.
      </Typography>
      <Typography variant="body1" paragraph>
        With a focus on quality, affordability, and excellent customer service, we strive to exceed your expectations
        and make your shopping journey enjoyable and hassle-free.
      </Typography>
      <Typography variant="body1" paragraph>
        Whether you're looking for the perfect gift, upgrading your tech gadgets, or refreshing your setup,
        we've got you covered. Explore our collection today and discover great deals on high-quality products!
      </Typography>
    </Container>
  );
}

export default About;
