import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import { authors } from '../data'
import AuthorLine from '../components/AuthorLine'
import { Box, Typography } from '@mui/material'
import mainImg from '../assets/entrepeneurship/vale/2.jpeg'
import Grid from '@mui/material/Unstable_Grid2'
import thirdImg from '../assets/entrepeneurship/vale/3.jpeg'
import seventhImg from '../assets/entrepeneurship/vale/7.jpeg'
import fourthImg from '../assets/entrepeneurship/vale/4.jpeg'
import fiveImg from '../assets/entrepeneurship/vale/5.jpeg'
import sixthImg from '../assets/entrepeneurship/vale/6.jpeg'
import firstImg from '../assets/entrepeneurship/vale/1.jpeg'

const Fair = () => {
  return (
    <ArticleWrapper>
      <Title>Feria de Emprendimiento caribe</Title>
      <AuthorLine>{authors.vale}</AuthorLine>
      <Box mb={2}>
        <img src={mainImg} alt="Bags" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        El día 2 de noviembre de 2023, en la Universidad Minuto de Dios,
        Rectoría Caribe, en la ciudad de Barranquilla, se realizó una feria
        universitaria dando a conocer los emprendimientos y las ideas de negocio
        de los estudiantes y algunos egresados.
      </Typography>
      <Typography paragraph>
        El emprendimiento "Creaciones Regina", fundado por Reina Isabell Sevas,
        es un proyecto que empezó a tomar más fuerza hace cuatro años,
        consolidándose como una microempresa. Maneja y crea sus propios
        productos elaborados en material de crochet.
      </Typography>
      <Grid container spacing={2} mb={3} mt={2}>
        <Grid xs={6}>
          <img src={thirdImg} alt="" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={6}>
          <img src={seventhImg} alt="" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      <Typography paragraph>
        Además, manejan diferentes tipos de técnicas, como la fabricación a
        máquina y la técnica en crochet (a mano). De igual manera, sus productos
        van desde la moda femenina, masculina y para mascotas. Lo que
        caracteriza a “Creaciones Regina” es su servicio personalizado, que te
        permite solicitar tus prendas como más te gusten.
      </Typography>
      <Grid container spacing={2} mb={3}>
        <Grid xs={6}>
          <img src={sixthImg} alt="" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={6}>
          <img src={fourthImg} alt="" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={6}>
          <img src={fiveImg} alt="" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={6}>
          <img src={firstImg} alt="" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      <Typography paragraph>
        Además, manejan diferentes tipos de técnicas, como la fabricación a
        máquina y la técnica en crochet (a mano). De igual manera, sus productos
        van desde la moda femenina, masculina y para mascotas. Lo que
        caracteriza a “Creaciones Regina” es su servicio personalizado, que te
        permite solicitar tus prendas como más te gusten.
      </Typography>
      <Typography paragraph>
        En palabras de Reina Isabel: "Mi mamá, desde muy niña, me enseñó a
        tejer. Gracias a ello y a la carrera de administración de empresas, fue
        posible consolidar mi empresa".
      </Typography>
    </ArticleWrapper>
  )
}

export default Fair
