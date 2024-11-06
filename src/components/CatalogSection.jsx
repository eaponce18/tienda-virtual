import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from 'react-router-dom';

export default function CatalogSection() {
  const navigate = useNavigate();

  const handleImageClick = (itemId) => {
    navigate(`/category`);
  };

  return (
    <Box sx={{ width: 'auto', height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem 
            key={item.img} 
            onClick={() => handleImageClick(item.id)}
            sx={{ cursor: 'pointer' }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'src/assets/vestido1.jpg',
    title: 'vestido rojo',
    author: 'swabdesign',
    id: 1,
  },
  {
    img: 'src/assets/vestido2.jpg',
    title: 'vestido amarillo',
    author: 'Pavel Nekoranec',
    id: 2,
  },
  {
    img: 'src/assets/vestido3.jpeg',
    title: 'vestido azul',
    author: 'Danson67',
    id: 3,
  },
  {
    img: 'src/assets/playera1.jpg',
    title: 'playera celeste',
    author: 'Fotoplayera',
    id: 4,
  },
  {
    img: 'src/assets/short1.png',
    title: 'short flores',
    author: 'Quicksilver',
    id: 5,
  },
  {
    img: 'src/assets/sombrero1.png',
    title: 'sombrero paja',
    author: 'Quicksilver',
    id: 6,
  },

];
