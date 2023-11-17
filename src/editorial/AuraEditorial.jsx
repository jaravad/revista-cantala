import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import { Box, Typography } from '@mui/material'
import mainImg from '../assets/editorial/1.jpeg'

const AuraEditorial = () => {
  return (
    <ArticleWrapper>
      <Title>Barranquilla</Title>
      <AuthorLine>{authors.aura}</AuthorLine>
      <Box mb={2} textAlign="center">
        <img
          src={mainImg}
          alt="marimonda"
          style={{ maxWidth: 550, width: '90%' }}
        />
      </Box>
      <Typography paragraph>
        La ciudad es conocida por su famoso Carnaval, uno de los festivales más
        grandes y alegres del mundo. Cada año, los barranquilleros y visitantes
        de todo el país y el extranjero se congregan para celebrar la cultura y
        la tradición de la región en un derroche de música, danza y color.
      </Typography>
      <Typography paragraph>
        El Carnaval es una manifestación viva de la identidad barranquillera,
        una celebración que resalta la riqueza multicultural de esta tierra.
      </Typography>
      <Typography paragraph>
        Pero Barranquilla es mucho más que su carnaval.
      </Typography>
      <Typography paragraph>
        Es una ciudad que se reinventa constantemente, con una economía en
        crecimiento y una escena artística y cultural que no deja de sorprender.
      </Typography>
    </ArticleWrapper>
  )
}

export default AuraEditorial
