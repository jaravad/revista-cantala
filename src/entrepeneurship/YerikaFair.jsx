import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import { Unstable_Grid2 as Grid, Typography } from '@mui/material'
import firstImage from '../assets/entrepeneurship/yerika/1.png'
import secondImage from '../assets/entrepeneurship/yerika/2.png'
import thirdImage from '../assets/entrepeneurship/yerika/3.png'

const YerikaFair = () => {
  return (
    <ArticleWrapper>
      <Title>Micro negocios en la Universidad Minuto de Dios</Title>
      <AuthorLine>{authors.yerika}</AuthorLine>
      <Typography paragraph>
        El Jueves 2 de Noviembre de 2023, en la universidad Minuto de Dios,
        Barranquilla, en la sede del colegio Acolsure, se realizó una feria de
        emprendimientos, en el cuál varias microempresas, e ideas de negocios
        pudieron exponer y vender sus productos. Dulce bendición K y G es un
        emprendimiento de Karen Ramirez que se basa en la panadería y
        resposteria, todo lo relacionado con mesa dulce, tortas, postres.
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
        Ella es Karen y comenta que este emprendimiento nació en pandemia cuando
        queda desempleada, al cabo de varios días se desespera ya que tiene 2
        hijas, Karelys y Gabriela ( por eso el nombre de K y G) ella no quiso
        dejarle la carga del hogar a su esposo y quiso indagar en el mundo de
        los negocios, por eso inició dicho proyecto, lo que caracteriza a Dulce
        bendición es su frescura, todos los pedidos los hace 1 o 2 días antes de
        entregar.
      </Typography>
      <Typography paragraph>
        El amor y las ganas de salir adelante es un ingrediente que nunca puede
        faltar en las preparaciones de esta emprendedora, hace todo lo que tiene
        que ver con repostería, los productos que más comercializa son las
        tortas personalizadas, cómo la pida el cliente así mismo la tiene, la
        podemos encontrar en Instagram como @dulcebendicionkyg para que puedan
        disfrutar de estas deliciosas preparaciones.
      </Typography>
      <Typography paragraph>
        Karen nos invita a qué para iniciar en el mundo del emprendimiento, se
        necesitan tomar decisiones, que te lo propongas, dispongas y lo hagas
        realidad, que quizás no se dé a la primera, pero se puede dar a la
        segunda, no desistir a los dificultades, echarle ganas a lo que haces
        para que todo te quede mejor, y más rico. A tí que te da miedo
        arriesgarse, llegó tu hora, has de tus falencias una oportunidad, para
        que tengas gratitud y prosperidad.
      </Typography>
    </ArticleWrapper>
  )
}

export default YerikaFair
