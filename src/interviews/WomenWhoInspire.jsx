import React from 'react'
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import ArticleWrapper from '../components/ArticleWrapper'
import AuthorLine from '../components/AuthorLine'
import Title from '../components/Title'
import { authors } from '../data'
import Subheader from '../components/Subheader'
import mainImg from '../assets/women.png'
import firstImg from '../assets/news/cris/1.png'
import secondImg from '../assets/news/cris/2.png'

const WomenWhoInspire = () => {
  return (
    <ArticleWrapper>
      <Title>Mujeres que inspiran</Title>
      <AuthorLine>{authors.cris}</AuthorLine>
      <Subheader>
        "Soy una mujer apasionada por su carrera, amo contar historias y hoy
        tengo la fortuna de hacerlo a través de esta corona"
      </Subheader>
      <Box mb={3}>
        <img src={mainImg} alt="Feria" style={{ maxWidth: '100%' }} />
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        mb={3}
        spacing={3}
      >
        <Grid xs={12} sm={9} md={10}>
          <Typography paragraph>
            Quien era Yuruby antes de ser reina, era un chica amante de su
            carrera, fanática de contar historias y siempre llevar este
            patrimonio por cual lenguajes cultural, el carnaval es sus amor y
            siempre será la ilusión mas grande, fueron la palabras mencionada
            por recién premiada mejor crónica en la unos premios al marco del
            carnaval de barranquilla
          </Typography>
          <Typography paragraph>
            Una experiencia me dejo mucho, unas chicas maravillosas mujer que de
            verdad admiro demasiado, encontré en ellas una amistad muy hermosa,
            aludo que no competimos, vivimos disfrutamos de cada segundo de este
            certamen.
          </Typography>
          <Typography paragraph>
            Los más complicado de esto, será dejar la corona. pero lo hare con
            la misma ilusión con la que la antecesora de mi reinado lo hizo,
            todas tenemos una gran misión y es salvaguarda la tradición y llevar
            por cada rincón de esta cuidad el carnaval.
          </Typography>
        </Grid>
        <Grid xs={4} sm={3} md={2}>
          <img src={secondImg} alt="" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid xs={8} sm={4} md={3}>
          <img src={firstImg} alt="" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={12} sm={8} md={9}>
          <Subheader>
            Yuruby Valentina Mendoza Ricardo, Tengo 23 años, soy comunicadora
            social, egresada de la universidad Sergio arboleda, amante de la
            cultura y contar historias, una mujer líder y caracterizada por la
            pasión de mi profesión. Ganadora de uno de los premios más
            prestigiosos en el marco del carnaval de Barranquilla y ahora porto
            la corona como Reina popular, llevando el nombre de cada barrio por
            estas fiestas.
          </Subheader>
        </Grid>
      </Grid>
    </ArticleWrapper>
  )
}

export default WomenWhoInspire
