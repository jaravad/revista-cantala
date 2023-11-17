import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import { Typography, Unstable_Grid2 as Grid } from '@mui/material'
import firstImg from '../assets/entrepeneurship/fabian/1.png'
import secondImg from '../assets/entrepeneurship/fabian/2.png'
import thirdImg from '../assets/entrepeneurship/fabian/3.png'
import fourthImg from '../assets/entrepeneurship/fabian/4.png'

const FabianFair = () => {
  return (
    <ArticleWrapper>
      <Title>Dulce Bendición K&G: Endulzando la Vida Universitaria</Title>
      <AuthorLine>{authors.fabian}</AuthorLine>
      <Grid container spacing={2} mb={2}>
        <Grid xs={6} sm={3}>
          <img src={firstImg} alt="postre" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={6} sm={3}>
          <img src={secondImg} alt="postre" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={6} sm={3}>
          <img src={thirdImg} alt="postre" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={6} sm={3}>
          <img src={fourthImg} alt="postre" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
      <Typography paragraph>
        En la Universidad Minuto de Dios, destaca Dulce Bendición K&G, un
        emprendimiento de repostería fundado por Karen Ramírez y sus hijas,
        Karen y Gabriela, en plena pandemia. Con más de 4 años de experiencia,
        Karen aporta su expertise a una propuesta versátil que incluye desde
        pasteles hasta galletas.
      </Typography>
      <Typography paragraph>
        La fortaleza de Dulce Bendición K&G radica en la dedicación y
        creatividad de Karen, combinada con la frescura y la innovación de sus
        hijas. La calidad es innegociable: ingredientes cuidadosamente
        seleccionados garantizan no solo deliciosos sabores, sino la confianza
        de los clientes.
      </Typography>
      <Typography>
        Un diferencial clave es la eficiente gestión de pedidos, entregando
        productos frescos en un máximo de 2 días. Este enfoque ha cimentado la
        reputación del emprendimiento como una opción confiable para la
        comunidad universitaria. Dulce Bendición K&G no es solo un stand de
        repostería; es una experiencia que endulza la vida universitaria con
        cada bocado, narrando una historia de resiliencia, pasión y éxito.
      </Typography>
    </ArticleWrapper>
  )
}

export default FabianFair
