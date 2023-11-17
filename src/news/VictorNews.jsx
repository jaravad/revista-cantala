import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import { Box, Typography } from '@mui/material'
import mainImg from '../assets/news/victor/1.png'

const VictorNews = () => {
  return (
    <ArticleWrapper>
      <Title>
        Barranquilla Inaugura Moderna Área de Recreación en el Parque
        Metropolitano
      </Title>
      <AuthorLine>{authors.victor}</AuthorLine>
      <Box mb={2}>
        <img src={mainImg} alt="recreación" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        Barranquilla, Colombia – Barranquilla avanzó en la mejora de su
        infraestructura de recreación con la inauguración de una nueva área de
        esparcimiento en el Parque Metropolitano. La inversión en este proyecto
        ha transformado una parte del parque en un espacio moderno y versátil
        para el disfrute de los ciudadanos.
      </Typography>
      <Typography paragraph>
        El área renovada del Parque Metropolitano cuenta con una amplia zona de
        juegos para niños, un gimnasio al aire libre, canchas deportivas
        multiusos y senderos peatonales rodeados de áreas verdes. Además, se ha
        instalado iluminación LED y bancos para brindar comodidad a quienes
        visiten el parque en horas de la noche.
      </Typography>
      <Typography paragraph>
        El alcalde de Barranquilla, enfatizó la importancia de esta renovación
        para la ciudad. "El Parque Metropolitano es un lugar emblemático en
        nuestra comunidad, y esta mejora no solo proporciona un espacio para el
        ejercicio y la recreación, sino que también promueve un sentido de
        comunidad y pertenencia", destacó el alcalde.
      </Typography>
      <Typography paragraph>
        La inversión en esta área de recreación forma parte de un esfuerzo más
        amplio para mejorar los espacios públicos de Barranquilla y promover un
        estilo de vida activo y saludable. Se espera que el Parque Metropolitano
        se convierta en un destino popular para familias y amantes del deporte
        en la ciudad.
      </Typography>
      <Typography paragraph>
        Los residentes de Barranquilla han elogiado esta iniciativa, que
        proporciona un espacio seguro y atractivo para que los niños jueguen y
        para que las personas de todas las edades realicen actividades al aire
        libre. La inauguración de esta área de recreación es un ejemplo de los
        esfuerzos continuos de la ciudad por mejorar la calidad de vida de sus
        habitantes.
      </Typography>
    </ArticleWrapper>
  )
}

export default VictorNews
