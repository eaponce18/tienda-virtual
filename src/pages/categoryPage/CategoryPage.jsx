// CategoryPage.js
import { Typography, Grid, Box } from '@mui/material';

function CategoryPage() {
  return (
    <Box padding={2}>
      <Typography variant="h5">Vestidos de Baño 1 Pieza</Typography>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Box component="img" src={`/path/to/product-image-${item}.jpg`} alt="Producto" width="100%" />
            <Typography variant="body1">Nombre del Producto</Typography>
            <Typography variant="body2">Descripción</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CategoryPage;
