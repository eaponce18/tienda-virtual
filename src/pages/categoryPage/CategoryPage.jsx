import { Typography, Grid, Box, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CategoryPage() {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Datos de ejemplo para los productos
  const products = [
    {
      id: 1,
      name: 'Vestido de Baño Coral',
      description: 'Elegante vestido de baño de una pieza',
      image: 'src/assets/vestido1.jpg'
    },
    {
      id: 2,
      name: 'Vestido de Baño Azul',
      description: 'Diseño moderno con detalles únicos',
      image: 'src/assets/vestido2.jpg'
    },
    {
      id: 3,
      name: 'Vestido de Baño Tropical',
      description: 'Estampado tropical para el verano',
      image: 'src/assets/vestido3.jpeg'
    },
    // Puedes agregar más productos aquí
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Button 
          onClick={() => navigate('/home')} 
          sx={{ mb: 3 }}
          variant="outlined"
        >
          Volver al Inicio
        </Button>
        
        <Typography variant="h4" sx={{ mb: 4 }}>
          Vestidos de Baño 1 Pieza
        </Typography>
        
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box
                onClick={() => handleProductClick(product.id)}
                sx={{
                  cursor: 'pointer',
                  p: 2,
                  border: '1px solid #eee',
                  borderRadius: 2,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 2
                  }
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 1,
                    mb: 2
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default CategoryPage;