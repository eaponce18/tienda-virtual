import { AppBar, Toolbar, Typography, Grid, Box, Paper } from '@mui/material';
import CompanyInfo from '../../components/CompanyInfo';
import CatalogSection from '../../components/CatalogSection';
import './HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">
            Bajamar - Tienda de Vestidos de Baño
          </Typography>
        </Toolbar>
      </AppBar>
      <Box id = "Fondo1"
                   sx={{ textAlign: 'center', margin: '0px 0', padding: '80px 0' }}

      >
        
        <Typography variant="h4" color="white" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
        style={{height: '55vh'}}>
          Bienvenidos a Bajamar
        </Typography>
              <Typography variant="h6" color="white" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                Encuentra los mejores vestidos de baño para este verano
              </Typography>
              </Box>
          <Grid item xs={12} className="background-alt">
            <Paper elevation={3} sx={{ padding: '20px' }}>
            </Paper>
            <CatalogSection />
          </Grid>
          <Grid item xs={12} className="background">
            <Paper elevation={3} sx={{ padding: '20px' }}>
              <CompanyInfo />
            </Paper>
          </Grid>
    </div>
  );
}

export default HomePage;
