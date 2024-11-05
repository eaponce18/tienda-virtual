// PaymentMethodPage.js
import { Typography, Box, TextField, Button } from '@mui/material';

function PaymentMethodPage() {
  return (
    <Box padding={2}>
      <Typography variant="h5">Método de Pago</Typography>
      <TextField fullWidth label="Dirección" margin="normal" />
      <TextField fullWidth label="Celular" margin="normal" />
      <TextField fullWidth label="Número de tarjeta" margin="normal" />
      <Button variant="contained">Confirmar</Button>
    </Box>
  );
}

export default PaymentMethodPage;
