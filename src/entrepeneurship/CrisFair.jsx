import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import Title from '../components/Title'
import mainImg from '../assets/entrepeneurship/cris/1.jpeg'
import secondImg from '../assets/entrepeneurship/cris/2.jpeg'
import thirdImg from '../assets/entrepeneurship/cris/3.jpeg'

const Entrepreneurship = () => {
  return (
    <ArticleWrapper>
      <Title>Emprendiendo desde el saber</Title>
      <AuthorLine>{`${authors.cris} `}</AuthorLine>
      <Typography component="span" variant="body1">
        - 9 de noviembre
      </Typography>
      <Box mb={3}>
        <img src={mainImg} alt="Feria" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        El pasado jueves, hicimos parte de una actividad realizada en el marco
        de la semana emprender de la universidad Minuto de Dios sede caribe,
        quien se encarga de congregar a un grupo de emprendedores para así
        ampliar sus segmentos de cliente y así apoyar en el crecimiento de
        estos.
      </Typography>
      <Typography paragraph>
        Pudimos apreciar mucha ideas fantásticas y mucho talento de estudiante y
        egresados, que con empeño han podido lograr su objetivo, ser emprendedor
        no es nada fácil así lo narra Dayana mercado, ella es egresado del
        programa de administración de empresa de UNIMINUTO, que siempre destaco
        su espíritu emprendedor, y de la mano de su mama logro llevar sus arte a
        esta plataforma
      </Typography>
      <Grid container spacing={2} mb={3} mt={1}>
        <Grid xs={6}>
          <img src={secondImg} style={{ maxWidth: '100%' }} alt="Artesanias" />
        </Grid>
        <Grid xs={6}>
          <img src={thirdImg} style={{ maxWidth: '100%' }} alt="Artesanias" />
        </Grid>
      </Grid>
      <Typography paragraph>
        También nos contó que asesorías Isabella, nace desde su mama, dice que
        todos en sus familia son muy creativos y un día se le ocurrió abrir una
        cuenta de Instagram para impulsar su negocio y le resultó, además
        describe con mucho orgullo que su mama es su gran inspiración la mente
        creativa de este negocio, quien con entrega en cada temporada luce su
        más bellas artesanías y así enardece su amor por este arte.
      </Typography>
    </ArticleWrapper>
  )
}

export default Entrepreneurship
