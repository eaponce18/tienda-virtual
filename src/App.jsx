import { AppBar, Toolbar, Typography, Grid, Box, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CompanyInfo from './components/CompanyInfo';
import './index.css';
import CatalogSection from './components/CatalogSection';

function App() {
  const navigate = useNavigate();

  const goToCategoryPage = () => {
    navigate('/category'); // Asegúrate de que "/category" esté definida en tus rutas
  };

  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bajamar - Tienda de Vestidos de Baño
          </Typography>
          <Button color="inherit" onClick={goToCategoryPage}>
            Información de productos
          </Button>
        </Toolbar>
      </AppBar>
      <Box id="Fondo1" sx={{ textAlign: 'center', margin: '0px 0', padding: '80px 0' }}>
        <Typography variant="h4" color="white" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }} style={{ height: '55vh' }}>
          Bienvenidos a Bajamar
        </Typography>
        <Typography variant="h6" color="white" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
          Encuentra los mejores vestidos de baño para este verano
        </Typography>
      </Box>
      <Grid item xs={12} className="background-alt">
        <Paper elevation={3} sx={{ padding: '20px' }}>
          <CatalogSection />
        </Paper>
      </Grid>
      <Grid item xs={12} className="background">
        <Paper elevation={3} sx={{ padding: '20px' }}>
          <CompanyInfo />
        </Paper>
      </Grid>
    </div>
  );
}

export default App;
