import React from 'react'
import { Box, Typography } from '@mui/material'
import arroyo from '../assets/arroyo.jpeg'
import ArticleWrapper from '../components/ArticleWrapper'
import AuthorLine from '../components/AuthorLine'
import Title from '../components/Title'
import { authors } from '../data'

const Floodings = () => {
  return (
    <ArticleWrapper>
      <Title>
        Motociclista fue arrastrado por fuerte arroyo en Barranquilla
      </Title>
      <AuthorLine>{authors.melany}</AuthorLine>
      <Box mb={2}>
        <img src={arroyo} alt="Cariaco" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        Un motociclista se salvó de milagro luego de ser arrastrado por un
        arroyo en Barranquilla, las fuertes lluvias azotaron la ciudad la tarde
        del miércoles. El joven fue sorprendido por la rápida corriente de agua
        mientras se desplazaba por la calle 82b con 75e, a la altura del barrio
        Las Tres AveMarias.
      </Typography>
      <Typography paragraph>
        Alrededor de dos kilómetros fue arrastrado, llegando hasta la Vía 40,
        donde finalmente pudo salir de manera ilesa.
      </Typography>
      <Typography paragraph>
        "Yo ya me hacía muerto. Ya estaba sin esperanza. Gracias a Dios que puso
        a esas personas que pudieron salvarme. Y fueron las que me devolvieron
        la vida prácticamente", aseguró el hombre.
      </Typography>
    </ArticleWrapper>
  )
}

export default Floodings
