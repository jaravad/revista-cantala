import { Box, Typography } from '@mui/material'
import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import Title from '../components/Title'
import mainImg from '../assets/cronica/yerika/1.png'

const YerikaCronica = () => {
  return (
    <ArticleWrapper>
      <Title>Pasión y resiliencia, el legado de Alejandra Villafañe</Title>
      <AuthorLine>{authors.yerika}</AuthorLine>
      <Box mb={3}>
        <img
          src={mainImg}
          alt="Alejandra Villafañe"
          style={{ maxWidth: '100%' }}
        />
      </Box>
      <Typography paragraph>
        Alejandra Villafañe, una talentosa actriz colombiana, dejó una profunda
        huella en el mundo del entretenimiento antes de su prematura partida a
        causa del cáncer. Su vida estuvo llena de momentos de éxito, desafíos y
        una innegable pasión por su profesión.
      </Typography>

      <Typography paragraph>
        Nacida en Bogotá en 1985, Alejandra mostró su amor por la actuación
        desde temprana edad. A medida que crecía, se sumergió en el mundo del
        teatro y rápidamente se convirtió en una prometedora actriz. Estudió
        arte dramático en reconocidas instituciones y su talento no pasó
        desapercibido para los críticos y el público.
      </Typography>

      <Typography paragraph>
        Su primer gran papel llegó en una popular serie de televisión
        colombiana, donde interpretó a un personaje secundario pero destacado.
        Su actuación fue elogiada por su naturalidad y carisma, y esto le abrió
        las puertas a numerosas oportunidades en la industria del cine y la
        televisión. Alejandra demostró su versatilidad asumiendo roles
        desafiantes en diversos géneros, desde drama hasta comedia.
      </Typography>

      <Typography paragraph>
        Su carrera estaba en constante ascenso, ganando reconocimiento tanto a
        nivel nacional como internacional. Alejandra recibió múltiples premios y
        nominaciones a lo largo de su carrera, lo que confirmó su talento y
        dedicación. Su presencia en la pantalla era magnética y transmitía una
        conexión especial con el público.
      </Typography>

      <Typography paragraph>
        Sin embargo, la vida de Alejandra pronto se vio afectada por una batalla
        con el cáncer. A pesar de su enfermedad, la actriz mostró una increíble
        valentía y determinación. Compartió públicamente su lucha,
        convirtiéndose en una inspiración para otros que enfrentaban
        enfermedades similares. Alejandra utilizó su fama y plataforma para
        concientizar sobre la importancia de la detección temprana y la lucha
        contra el cáncer.
      </Typography>

      <Typography paragraph>
        A medida que el tiempo pasaba, Alejandra continuó trabajando en
        proyectos en los que creía, a pesar de las dificultades. Su
        determinación y amor por la actuación nunca se desvanecieron. Su última
        actuación, incluso mientras luchaba contra la enfermedad, fue aclamada
        por su entrega y profesionalismo.
      </Typography>
      <Typography paragraph>
        La trágica noticia de su fallecimiento dejó a la industria del
        entretenimiento y al público en general con un profundo dolor. Alejandra
        Villafañe dejó un legado impresionante en la industria del cine y la
        televisión colombiana. Su impacto perdurará a través de sus actuaciones
        memorables y de su valiente lucha contra la enfermedad.
      </Typography>
      <Typography paragraph>
        La vida de Alejandra Villafañe es una historia de talento, pasión y
        resiliencia. Su espíritu y dedicación continúan siendo una fuente de
        inspiración para aquellos que sueñan con seguir sus pasos en el mundo de
        la actuación.
      </Typography>
    </ArticleWrapper>
  )
}

export default YerikaCronica
