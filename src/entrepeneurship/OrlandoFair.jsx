import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material'
import firstImage from '../assets/entrepeneurship/orlando/1.png'
import secondImage from '../assets/entrepeneurship/orlando/2.png'
import thirdImage from '../assets/entrepeneurship/orlando/3.png'
import fourthImage from '../assets/entrepeneurship/orlando/4.png'
import fifthImage from '../assets/entrepeneurship/orlando/5.png'
import sixthImage from '../assets/entrepeneurship/orlando/6.png'

const OrlandoFair = () => {
  return (
    <ArticleWrapper>
      <Title>Feria de Emprendimiento Caribe 2023</Title>
      <AuthorLine>{authors.orlando}</AuthorLine>
      <Box mb={2} textAlign="center">
        <img src={firstImage} alt="feria" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        El jueves dos de noviembre se llevó a cabo la feria de emprendimiento
        caribe 2023, un espacio organizado por la corporación universitaria
        Minuto de Dios Barranquilla, lugar que se prestó para que estudiantes se
        apropiaran del campus, para brindar diferentes servicios a la comunidad
        educativa.
      </Typography>

      <Typography paragraph>
        El evento contó con más de 15 Stand donde se pudieron apreciar
        diferentes marcas y creaciones, desde artesanías, alimentos, juegos para
        niños y adornos navideños. También se compartió un espacio cultural
        donde participó el grupo folclórico de la Universidad UNIMINUTO.
      </Typography>
      <Grid container spacing={2} mb={2}>
        <Grid xs={6}>
          <img src={secondImage} alt="feria" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={6}>
          <img src={thirdImage} alt="feria" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      <Typography paragraph>
        En este espacio muchas personas se vieron beneficiadas a raíz de las
        ventas que lograron por estudiantes de la corporación, la señora Lizeth
        Mendoza, ingeniera industrial de profesión pero actualmente estudiante
        de contaduría pública en UNIMINUTO. Nos contó que su emprendimiento se
        llama Creaciones Licemary, tiene cuadros de pintura en tela,
        individuales, caminos de mesa, cojines, también tiene pintura en madera
        con resinas, cuadros en lienzo con utilización de hojillas, cuadros de
        navidad hechos totalmente en tela.
      </Typography>
      <Typography paragraph>
        La señora Lizeth sueña con llevar su emprendimiento a madres cabezas de
        hogar, o para personas que a través de un arte puedan salir adelante.
      </Typography>
      <Grid container spacing={2} alignItems="center" mb={2}>
        <Grid xs={12} sm={4} textAlign="center">
          <img src={fourthImage} alt="feria" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={12} sm={4} textAlign="center">
          <img src={fifthImage} alt="feria" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={12} sm={4} textAlign="center">
          <img src={sixthImage} alt="feria" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      <Typography>
        En la feria también pudimos dialogar con el padre German Gándara rector
        de UNIMINUTO caribe que nos dice que este tipo de emprendimientos tiene
        que comenzar a ser parte de toda la propuesta de saberes, de estudio, de
        enseñanza aprendizaje de un profesional hoy por hoy. No podemos imaginar
        un contador, un comunicador social, un ingeniero sin una habilidad que
        les permita a estos profesionales formar empresas, y el emprendimiento
        apoya a que esa pequeña y mediana empresa puedan fortalecerle, generar
        empleo y justicia social.
      </Typography>
      <Typography paragraph>
        La Corporación Universitaria Minuto de Dios impulsa a todos sus
        estudiantes que tengan algún tipo de emprendimiento, que se arriesguen a
        participar de estas ferias que ayudan al desarrollo económico y social
        de la humanidad.
      </Typography>
    </ArticleWrapper>
  )
}

export default OrlandoFair
