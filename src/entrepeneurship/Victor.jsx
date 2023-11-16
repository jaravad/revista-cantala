import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { Box, Link, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import { authors } from '../data'
import mainImg from '../assets/entrepeneurship/victor/4.png'
import firstImg from '../assets/entrepeneurship/victor/1.png'
import secondImg from '../assets/entrepeneurship/victor/2.png'
import thirdImg from '../assets/entrepeneurship/victor/3.png'

const Victor = () => {
  return (
    <ArticleWrapper>
      <Title>
        El Arte Frío: Esculturas en Porcelana que Despiertan Emociones
      </Title>
      <AuthorLine>{authors.victor}</AuthorLine>
      <Box mb={3}>
        <img src={mainImg} alt="Feria" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        En el día 2 de noviembre de 2023 se llevó a cabo una feria universitaria
        donde se dio a conocer emprendimientos de estudiantes y egresados de la
        universidad Uniminuto donde nos mostraron los servicios que le brindan a
        la comunidad
      </Typography>
      <Typography paragraph>
        Edison Baza nos estuvo contando acerca de su emprendimiento llamado
        Bazartes que como su nombre lo dice, se dedica a todo lo relacionado con
        artes principalmente con gorras, camisetas las cuales las puedes
        personalizar a tu manera, zapatos propios de su marca con su sello único
        de fotos y logos de películas Marvel, también figuras elaboradas En
        porcelana fría donde se destacan figuras de fútbol y de peliculas
      </Typography>
      <Grid container spacing={2} mb={3}>
        <Grid xs={4}>
          <img
            src={firstImg}
            alt="Feria"
            style={{ maxWidth: '100%', height: '100%' }}
          />
        </Grid>
        <Grid xs={4}>
          <img
            src={secondImg}
            alt="Feria"
            style={{ maxWidth: '100%', height: '100%' }}
          />
        </Grid>
        <Grid xs={4}>
          <img
            src={thirdImg}
            alt="Feria"
            style={{ maxWidth: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography paragraph>
        Edison nos comentó que desde niño siempre le gustó todo lo relacionado
        con artes y desde los 7 años soño con hacer real su anhelo que gracias a
        Uniminuto se pudo materializar, en la pequeña charla que se tuvo nos
        comentó que este tipo de actividades le sirven a muchas personas para
        crecer un poco con sus proyectos e ideas
      </Typography>
      <Typography paragraph>
        Al final Baza nos dejó un lindo mensaje él cual es Mantener la pasión
        encendida, celebrar los pequeños logros y seguir adelante con confianza
        y hacer lo que nos gusta. El mundo está necesitado de jóvenes valientes
        que se atrevan a crear, innovar y cambiar.
      </Typography>

      <Typography variant="h5">Redes sociales de Edison</Typography>
      <ul>
        <li>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/baza_artes/"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/artes.baza.9"
          >
            Facebook
          </Link>
        </li>
      </ul>
    </ArticleWrapper>
  )
}

export default Victor
