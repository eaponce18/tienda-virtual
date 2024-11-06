// ShoppingCartPage.js
import { Typography, Box, Grid, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function ShoppingCartPage() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <Box padding={2}>
      <Typography variant="h5">Carrito de Compra</Typography>
      <Grid container spacing={2}>
        {/* Ejemplo de un artículo en el carrito */}
        <Grid item xs={12}>
          <Typography>Nombre del Producto</Typography>
          <Typography>Descripción</Typography>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <Typography>₡20000</Typography>
        </Grid>
      </Grid>
      <Typography variant="h6">Total: ₡45200</Typography>
      <Button 
        variant="contained" 
        onClick={handleCheckout}
        sx={{ mt: 2 }}
      >
        Proceder al Pago
      </Button>
    </Box>
  );
}

export default ShoppingCartPage;