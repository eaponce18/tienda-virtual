// LoginPage.js
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí podrías agregar lógica para autenticar al usuario
    navigate('/home'); // Redirige a HomePage
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" sx={{ backgroundImage: 'url(/path/to/background-image.jpg)', backgroundSize: 'cover' }}>
      <Typography variant="h4" color="white">Bajamar - Tienda de Baño</Typography>
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button variant="contained" color="primary" onClick={handleLogin}>Ingresar</Button>
    </Box>
  );
}

export default LoginPage;
