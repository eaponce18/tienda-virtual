// ProductDetailPage.js
import { Typography, Box, Grid, IconButton, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductDetailPage() {
  return (
    <Box padding={2}>
      <Typography variant="h5">Vestidos de Baño 2 Piezas</Typography>
      <Typography variant="subtitle1">Vestido 1</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src="URL_DE_IMAGEN" alt="Producto" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Características</Typography>
          {/* Aquí puedes mapear los tamaños disponibles */}
          <Rating name="read-only" value={4} readOnly />
          <Typography variant="h6">₡10 000</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductDetailPage;