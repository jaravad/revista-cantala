import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import { Box, Typography } from '@mui/material'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import mainImg from '../assets/news/fabian/1.jpeg'

const Fabian = () => {
  return (
    <ArticleWrapper>
      <Title>
        La Selección Colombia Enfrenta Desafíos Cruciales en la Clasificación
        para el Mundial 2026
      </Title>
      <AuthorLine>{authors.fabian}</AuthorLine>
      <Box mb={3}>
        <img src={mainImg} alt="Feria" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        La emoción del fútbol sudamericano se intensifica durante la fase
        clasificatoria de Conmebol para el Mundial 2026, donde la Selección
        Colombia, dirigida por Néstor Lorenzo, se enfrenta a desafíos cruciales.
        Después de acumular cuatro puntos en septiembre, el equipo se prepara
        para enfrentar a Brasil y Paraguay en noviembre, buscando fortalecer su
        posición en la tabla de clasificación.
      </Typography>

      <Typography paragraph>
        El entorno de la selección es complicado, con situaciones adversas como
        el secuestro del padre de Luis Díaz y lesiones recientes de jugadores
        clave como James Rodríguez. Además, la falta de ritmo de juego de
        figuras como Yerry Mina añade dificultades al enfrentarse a equipos de
        alto calibre.
      </Typography>

      <Typography paragraph>
        El primer desafío será contra Brasil en Barranquilla el 16 de noviembre
        de 2023, en un horario atípico a las 7:00 p. m. para evitar el calor
        intenso. Los aficionados podrán seguir el partido por televisión y en
        línea. Luego, el 21 de noviembre, Colombia se enfrentará a Paraguay,
        cerrando su participación en 2023 antes de una pausa en las
        Eliminatorias.
      </Typography>

      <Typography paragraph>
        La tabla de posiciones refleja una competencia intensa, con Argentina
        liderando y Colombia en una posición delicada con 6 puntos. La quinta
        fecha de las Eliminatorias promete ser emocionante, con otros equipos
        buscando mejorar su posición.
      </Typography>

      <Typography paragraph>
        La clasificación de Conmebol para el Mundial ha cambiado con más cupos
        disponibles. Colombia tiene la oportunidad de aprovechar esta expansión,
        con seis plazas directas y una al repechaje. La competencia se extenderá
        hasta octubre de 2025, y la Selección Colombia aspira a asegurar su
        presencia en el Mundial, superando obstáculos con talento y estrategia
        para estar entre los seis primeros de la tabla.
      </Typography>
    </ArticleWrapper>
  )
}

export default Fabian
