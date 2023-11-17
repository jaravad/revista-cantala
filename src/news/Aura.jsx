import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import { Box, Typography } from '@mui/material'
import mainImg from '../assets/news/aura/1.jpeg'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'

const Aura = () => {
  return (
    <ArticleWrapper>
      <Title>Y si, como ya escucharon... Maluma sera Papa</Title>
      <AuthorLine>{authors.aura}</AuthorLine>
      <Box mb={2}>
        <img src={mainImg} alt="Maluma" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        Dentro de unos post que Publico el cantante colombiano en su red social
        de instagram, pudimos confirmar que pasara a una nueva etapa en su vida,
        cumpliendo el rol de ser papa. Con mucha nostalgia y entusiasmo le
        hicieron saber la noticia por un concierto realizado en Chile el pasado
        10 de septiembre, sus seguidores se han unido a esta excelente noticia
        tomndolo con toda la acepción y apoyo hacia el cantante en esta nueva
        etapa que cruza junto a su pareja Susana Gomez.
      </Typography>
      <Typography paragraph>!Felicidades en este nuevo reto!</Typography>
    </ArticleWrapper>
  )
}

export default Aura
