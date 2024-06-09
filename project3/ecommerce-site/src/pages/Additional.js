import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

function Additional() {
  const reviews = [
    { name: 'Imran Bašić', review: 'Great product! Highly recommend.' },
    { name: 'Emir Gaši', review: 'Excellent customer service and fast shipping.' },
  ];

  const faqs = [
    { question: 'What is your return policy?', answer: 'We offer a 30-day return policy.' },
    { question: 'How long does shipping take?', answer: 'Shipping usually takes 5-7 business days.' },
  ];

  const teamMembers = [
    { name: 'Almin Bajramović', role: 'CEO' },
    { name: 'Osman Udvinčić', role: 'CTO' },
  ];

  return (
    <Container id="additional">
      <Typography variant="h4" gutterBottom>Additional Information</Typography>
      
      
      <Box my={4}>
        <Typography variant="h5" gutterBottom>Customer Reviews</Typography>
        <Grid container spacing={2}>
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="body1">{review.review}</Typography>
                  <Typography variant="subtitle1">{review.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      
      <Box my={4}>
        <Typography variant="h5" gutterBottom>FAQs</Typography>
        {faqs.map((faq, index) => (
          <div key={index}>
            <Typography variant="body1"><strong>{faq.question}</strong></Typography>
            <Typography variant="body2">{faq.answer}</Typography>
          </div>
        ))}
      </Box>

      
      <Box my={4}>
        <Typography variant="h5" gutterBottom>Meet Our Team</Typography>
        <Grid container spacing={2}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2">{member.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Additional;
