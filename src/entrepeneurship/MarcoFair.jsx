import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import { authors } from '../data'
import AuthorLine from '../components/AuthorLine'
import { Box, Link, Typography } from '@mui/material'
import mainImg from '../assets/entrepeneurship/marco/1.png'

const MarcoFair = () => {
  return (
    <ArticleWrapper>
      <Title>
        KidsJoy: emprendimiento para la estimulación adecuada para bebés
      </Title>
      <AuthorLine>{authors.marco}</AuthorLine>
      <Box mb={3} display="flex" justifyContent="center">
        <img
          src={mainImg}
          alt="Feria"
          style={{ width: '90%', maxWidth: 600 }}
        />
      </Box>
      <Typography paragraph>
        ¿Alguno de nosotros hemos pensado y preguntado, como podemos hacer para
        que nuestros bebés o niños obtengan con facilidad la habilidad del
        lenguaje o motricidad sin necesidad de tener que ir a una escuela?{' '}
      </Typography>
      <Typography paragraph>
        Sabiendo muy bien que al momento de ingresar a una escuela es un gasto y
        que las probabilidades de que el niño de 3 a 4 años aprenda pueden ser
        muy bajas. Este emprendimiento llamado Kids Joy encargado por la
        Señorita Paula Guardiola, estudiante de la carrera licenciatura en
        educación infantil, de la universidad Minuto de Dios, estando en segundo
        semestre ella demuestra su pasión por querer demostrarle a la sociedad
        la capacidad que tiene de poder enseñarle a los niños y que sean capaces
        de desempeñarse al momento de ingresar a una escuela o un Kínder.
      </Typography>
      <Typography paragraph>
        Este emprendimiento es un complementario que se emplea con ayuda también
        de un profesional en pediatría.
      </Typography>
      <Typography paragraph>
        Otra pregunta que también nos hacemos es ¿cómo podemos hacer para que
        nuestros hijos en su tiempo libre no estén todo el rato pegado a una
        tecnología? Aquí te ofrece unas clases dinámicas y didácticas para que
        ellos se distraigan, despejen su mente y así también ayudarlos con su
        desarrollo cognitivo, este proceso va de la mano con los padres, para
        que también aporten a la educación y siguiendo las indicaciones puede
        que la mejora se note de manera rápida.
      </Typography>
      <Typography paragraph>
        Entrando en materia de lo que aquí se te ofrece, hay una variedad de
        implementos y utilidades que son muy efectivos para el desempeño del
        niño como lo es un libro donde su función es colocar las partes que
        están separadas en su lugar, también hay algo con texturas diferentes,
        para que puedan sentir y diferenciar lo que es tanto sólido, líquido,
        espeso, etc...
      </Typography>
      <Typography paragraph>
        Este emprendimiento ya lleva dos años de funcionamiento y todo comenzó
        por una mamá que le pidió ayuda con su hijo que tenía un poco de retraso
        con respecto a su lenguaje, la contactó le gustó su trabajo y gracias a
        eso fue recorriendo de voz en voz y así obtuvo la popularidad que tiene
        hoy en día.
      </Typography>
      <Typography paragraph>
        No cerremos la posibilidad de tener a nuestro hijo en ayuda profesional
        para que puedan superar sus miedos y temores, para convertirlo en unos
        niños seguros y capaces de sí mismo. Para poder contactar a la Señorita
        Paula pueden entrar en su página de Instagram como{' '}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/kidsjoyco/"
        >
          @KidsJoy
        </Link>{' '}
        y su número de teléfono{' '}
        <Link target="_blank" rel="noreferrer" href="tel:3112102726">
          3112102726
        </Link>{' '}
        Deja que tu niño tenga aventuras y experiencias fuera de lo habitual y
        te darás cuenta lo maravilloso que puede ser
      </Typography>
    </ArticleWrapper>
  )
}

export default MarcoFair
