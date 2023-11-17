import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import { Typography, Unstable_Grid2 as Grid, Box } from '@mui/material'
import mainImg from '../assets/infographics/orlando/1.jpeg'
import secondImg from '../assets/infographics/orlando/2.jpeg'
import thirdImg from '../assets/infographics/orlando/3.jpeg'
import { authors } from '../data'

const Orlando = () => {
  return (
    <ArticleWrapper>
      <Typography
        variant="h3"
        mb={2}
        align="center"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Barranquilla
      </Typography>
      <Box
        borderTop="1px solid #bfbfbf"
        borderBottom="1px solid #bfbfbf"
        py={1}
        mb={2}
      >
        <Typography variant="h5" align="center" textTransform="uppercase">
          La ciudad de la alegría
        </Typography>
      </Box>
      <Typography variant="body1" mb={2} align="center">
        Por <strong>{authors.orlando}</strong>
      </Typography>

      <Grid container spacing={2} mb={3}>
        <Grid xs={12} sm={4}>
          <Typography
            align="center"
            borderBottom="1px solid #bfbfbf"
            pb={1}
            variant="body1"
            fontWeight="bold"
            mb={2}
          >
            Barranquilla - Colombia
          </Typography>
          <Typography>
            Ubicada en la costa norte de Colombia, es una ciudad vibrante llena
            de historia, cultura y tradición.
          </Typography>
        </Grid>
        <Grid xs={12} sm={4}>
          <Typography
            align="center"
            borderBottom="1px solid #bfbfbf"
            pb={1}
            variant="body1"
            fontWeight="bold"
            mb={2}
          >
            Carnaval de Barranquilla
          </Typography>
          <Typography>
            Barranquilla es famosa por su Carnaval, uno de los eventos festivos
            más grandes y coloridos de América Latina. El Carnaval de
            Barranquilla es Patrimonio Cultural Inmaterial de la Humanidad de la
            UNESCO y atrae a visitantes de todo el mundo.
          </Typography>
        </Grid>
        <Grid xs={12} sm={4}>
          <Typography
            align="center"
            borderBottom="1px solid #bfbfbf"
            pb={1}
            variant="body1"
            fontWeight="bold"
            mb={2}
          >
            Cultura y Música
          </Typography>
          <Typography>
            La cumbia y el vallenato, dos géneros musicales tradicionales de
            Colombia, tienen sus raíces en Barranquilla. La ciudad es cuna de
            músicos y artistas renombrados que han dejado una huella imborrable
            en la música latina.
          </Typography>
        </Grid>
      </Grid>
      <Box mb={3}>
        <img src={mainImg} alt="Barranquilla" style={{ maxWidth: '100%' }} />
      </Box>

      <Grid container spacing={2} alignItems="center">
        <Grid xs={12} sm={6} md={8}>
          <Typography variant="h4" mb={2}>
            Gastronomía costeña
          </Typography>
          <Typography paragraph>
            Prueba los deliciosos platos de la costa caribeña colombiana, como
            el ceviche, el arroz con coco y el sancocho de pescado.
          </Typography>
          <Typography paragraph>
            Barranquilla es conocida por sus puestos de comida callejera, donde
            puedes disfrutar de auténticos sabores locales.
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <img src={thirdImg} alt="comida" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      <Box borderBottom="1px solid #bfbfbf" my={3} />
      <Grid container spacing={2} alignItems="center">
        <Grid xs={12} sm={6} md={4}>
          <img src={secondImg} alt="playa" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={12} sm={6} md={8}>
          <Typography variant="h4" mb={2}>
            Playas y Naturaleza
          </Typography>
          <Typography paragraph>
            Disfruta de las hermosas playas de la ciudad, como Playa Salgar y
            Playa Mendoza, para relajarte y disfrutar del sol y el mar.
          </Typography>
          <Typography paragraph>
            Explora los manglares y la fauna en los alrededores, incluido el
            Parque Isla Salamanca.
          </Typography>
        </Grid>
      </Grid>
      <Box borderBottom="1px solid #bfbfbf" my={3} />
      <Typography variant="h4" mb={2}>
        Hospitalidad y Calidez
      </Typography>
      <Typography paragraph>
        Los barranquilleros son conocidos por su amabilidad y hospitalidad,
        haciendo que los visitantes se sientan como en casa.
      </Typography>
      <Typography paragraph>
        Barranquilla, la ciudad de la alegría, te espera con los brazos abiertos
        para que descubras su rica cultura, su música envolvente y su espíritu
        festivo. ¡Ven y sé parte de esta experiencia única!
      </Typography>
    </ArticleWrapper>
  )
}

export default Orlando
