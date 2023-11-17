import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import { Box, Typography } from '@mui/material'
import Subheader from '../components/Subheader'
import mainImg from '../assets/interviews/yerika/1.jpeg'

const YerikaInterview = () => {
  return (
    <ArticleWrapper>
      <Title>Mujeres que inspiran: Reinado Popular</Title>
      <AuthorLine>{authors.cris}</AuthorLine>
      <Subheader>
        Hoy será el cierre de inscripciones al certamen más importante realizado
        en el marco del carnaval de Barranquilla, en donde una Carnavalera en
        representación de su barrio popular será las encargada de llevar la
        cultura y tradición a cada rincón de nuestra ciudad.
      </Subheader>
      <Box mb={2}>
        <img src={mainImg} alt="Reinado" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        Un Reinado lleno de cambios y buenas estrategias, además también
        tendremos un lema que nos caracteriza a cada una de las barranquilleras
        y es que Somos mujeres que inspiran , mujeres que bailan como ninguna,
        mujeres únicas e inigualable. Y en esta oportunidad estas chicas serán
        formadas en los talleres que se estarán brindando a lo largo de esté
        certamen y en el que ellas podrán aprender Marketing , fogueo
        periodístico, emprendimiento y muchas más cosas por que estes 2024
        venimos recargados con muchas sorpresas.
      </Typography>
      <Typography></Typography>
      <Typography></Typography>
    </ArticleWrapper>
  )
}

export default YerikaInterview
