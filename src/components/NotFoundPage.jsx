import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container style={styles.container}>
      <Typography variant="h1" style={styles.title}>
        404
      </Typography>
      <Typography variant="h4" style={styles.subtitle}>
        Page Not Found
      </Typography>
      <Typography variant="body1" style={styles.message}>
        Sorry, the page you are looking for does not exist. You can always go back to the homepage.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/" style={styles.button}>
        Go Home
      </Button>
    </Container>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '10%',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#3f51b5',
  },
  subtitle: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  message: {
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
  },
};

export default NotFoundPage;
