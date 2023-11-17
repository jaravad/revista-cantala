import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import { Unstable_Grid2 as Grid, Typography } from '@mui/material'
import firstImage from '../assets/entrepeneurship/melany/1.png'
import secondImage from '../assets/entrepeneurship/melany/2.png'
import thirdImage from '../assets/entrepeneurship/melany/3.png'

const MelanyFair = () => {
  return (
    <ArticleWrapper>
      <Title>Diseñando Arte</Title>
      <AuthorLine>{authors.melany}</AuthorLine>
      <Typography paragraph>
        Un emprendimiento creado por Javier Reyes de la universidad Minuto de
        Dios, se basa en la fabricación de mecedoras y mesas artesanales,
        diseñadas a medida, colores, tamaños y al gusto de todos los clientes,
        ofrecen una gran variedad en catálogo en cuanto a tonalidad, puedes
        elegir el color que quieras en tu silla, de uno a todos los tonos que tu
        desees.
      </Typography>

      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
          <img src={firstImage} alt="dulces" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={12} sm={4}>
          <img src={secondImage} alt="dulces" style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid xs={12} sm={4}>
          <img src={thirdImage} alt="dulces" style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>

      <Typography paragraph>
        Esta idea surgió a través de un pensamiento “vayamos hacia México
        Acapulco (Sillas Acapulco)”, hagamos posible esto con modelos parecidos
        pero no iguales.
      </Typography>
      <Typography paragraph>
        Reutilizan el material para las sillas, fabrican plástico 100%
        reciclables, bolsas de agua oxigenada 100% reciclables de hospitales,
        ponen en práctica un tratado de limpieza, un tratado de pigmentaciónes
        para obtener así, brevemente el producto del tejido.
      </Typography>
      <Typography paragraph>
        El diseño de la mesa es 100% fabricada en madera natural llamada Campal,
        la base de la mesa está fabricada en barrillas redondas lisas, dándole
        así un acabado en pintura poli luterano, listas para usar en interiores,
        exteriores y en todo lugar que usted desee, asegurando así que no se le
        va a deteriorar el color y nunca se va a deteriorar el material del
        producto.
      </Typography>
    </ArticleWrapper>
  )
}

export default MelanyFair
