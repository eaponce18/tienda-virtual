import {
    Container, Typography, Button,
  } from '@mui/material';
  import { ArrowBack } from '@mui/icons-material';
  import { indigo } from '@mui/material/colors';
  import './styles.css';
  
  function Page404() {
    return (
      <div className="not-found">
        <Container className="container">
          <Typography
            variant="h1"
            sx={{
              color: indigo.A700,
              fontSize: '5em',
              marginBottom: '1rem',
            }}
          >
            404
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginBottom: '1em',
              color: '#555',
              fontWeight: 'light',
            }}
          >
            No pudimos encontrar la página que estabas buscando
          </Typography>
          <Button
            variant="text"
            color="primary"
            size="large"
            href="/"
            startIcon={<ArrowBack />}
          >
            Volver a Inicio
          </Button>
          <Typography
            variant="body2"
            sx={{
              color: '#555',
              fontSize: '1rem',
              position: 'absolute',
              bottom: '24px',
              right: '24px',
            }}
          >
            ¯\_(ツ)_/¯
          </Typography>
        </Container>
      </div>
    );
  }
  
  export default Page404;
  