import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function CatalogSection() {
    return (
      <Box sx={{ width: 'auto', height: 450, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
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
    },
    {
      img: 'src/assets/vestido2.jpg',
      title: 'vestido amarillo',
      author: 'Pavel Nekoranec',
    },
    {
      img: 'src/assets/vestido3.jpeg',
      title: 'vestido azul',
      author: 'Danson67',
    },
    {
      img: 'src/assets/playera1.jpg',
      title: 'playera celeste',
      author: 'Fotoplayera',
    },
    {
      img: 'src/assets/short1.png',
      title: 'short flores',
      author: 'Quicksilver',
    },
    {
      img: 'src/assets/sombrero1.png',
      title: 'sombrero paja',
      author: 'Quicksilver',
    },

];
