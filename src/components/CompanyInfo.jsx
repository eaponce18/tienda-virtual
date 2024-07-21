import { Typography, Box } from '@mui/material';

const CompanyInfo = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Información de la Empresa
      </Typography>
      <Typography variant="body1" paragraph>
        Bajamar es una tienda virtual especializada en vestidos de baño. Nos enfocamos en ofrecer productos de alta calidad para que disfrutes del verano con estilo. 
      </Typography>
      <Typography variant="h5" gutterBottom>
        Direcciones
      </Typography>
      <Typography variant="body1">
        Aunque somos una tienda virtual, puedes encontrarnos en nuestras redes sociales:
      </Typography>
      <Typography variant="body1">
        - Facebook: facebook.com/bajamar
      </Typography>
      <Typography variant="body1">
        - Instagram: instagram.com/bajamar
      </Typography>
      <Typography variant="body1">
        - Twitter: twitter.com/bajamar
      </Typography>
    </Box>
  );
};

export default CompanyInfo;
