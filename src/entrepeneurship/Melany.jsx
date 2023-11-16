import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import { Box, Typography } from '@mui/material'
import mainImg from '../assets/opinion/melany/1.jpeg'

const Melany = () => {
  return (
    <ArticleWrapper>
      <Title>Barranquilla es Investigación</Title>
      <AuthorLine>{authors.melany}</AuthorLine>
      <Box mb={3}>
        <img src={mainImg} alt="Feria" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        Un verdadero centro de innovación, investigación y desarrollo, así
        conocemos hoy a la Puerta de Oro de Colombia, gracias a los proyectos
        académicos y científicos realizados por los diferentes sectores
        presentes en la región y que se han convertido en cuna de apuestas de
        alto impacto. Sin duda, uno de sus grandes potenciales es en materia de
        salud, y Barranquilla, afirma que en un sentido profundo consideran la
        salud como uno de los factores estratégicos para su desarrollo.
      </Typography>

      <Typography variant="h4" mb={2}>
        Datos clave
      </Typography>
      <Typography paragraph>
        "Muchos de los colegas se articularon para dar respuesta a una de las
        situaciones que más retó a todos los sistemas de salud, a nivel mundial.
        Lo anterior hizo que se resaltaran las potencialidades que tenemos a
        nivel de ciencia e inició una profunda reflexión acerca de cómo mejorar
        nuestra capacidad en servir a nuestra región", detalla el directivo.
      </Typography>
      <Typography paragraph>
        "Áreas que en algún momento corrían paralelas, ahora encuentran puntos
        comunes, como es el caso de la epidemiología molecular que incorpora
        elementos propios de la genómica y biología molecular para asistir al
        fin último de la epidemiología, al comprender la influencia de la
        individualidad humana en el patrón observado de las enfermedades. Así
        que la epidemiologia molecular es una de esas novedades que rendirán
        información útil tanto al individuo como a los sistemas de salud",
        agrega San Juan.
      </Typography>
      <Typography paragraph>
        Debemos buscar formas de promover este tema en diferentes campos.
      </Typography>
    </ArticleWrapper>
  )
}

export default Melany
