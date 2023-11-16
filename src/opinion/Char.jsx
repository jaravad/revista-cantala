import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import { Box, Typography } from '@mui/material'
import char from '../assets/char.jpeg'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import Title from '../components/Title'

const Char = () => {
  return (
    <ArticleWrapper>
      <Title>
        Alejandro Char anuncia su equipo de trabajo: Rafael Lafont de Sales como
        secretario de Infraestructura
      </Title>
      <AuthorLine>{authors.vale}</AuthorLine>
      <Box mb={3}>
        <img src={char} alt="Cariaco" style={{ maxWidth: '100%' }} />
        <Typography variant="caption">
          Alejandro Char ya nombró a su primer secretario, Rafael Lafont Sales.
        </Typography>
      </Box>
      <Typography paragraph>
        El alcalde electo de Barranquilla, Alejandro Char, elogió a Lafont de
        Sales como "Un excelente ser humano y comprometido funcionario".
        Claramente, existe una admiración por el trabajo y el esfuerzo de Sales.
        Además, tienen el objetivo de llevar, junto con su equipo de trabajo, a
        un nivel superior a Barranquilla. Solo esperamos que ese nivel sea en
        todos los ámbitos posibles y que se refleje realmente.
      </Typography>
    </ArticleWrapper>
  )
}

export default Char
