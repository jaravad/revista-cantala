import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import { Typography } from '@mui/material'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import Subheader from '../components/Subheader'

const Elections = () => {
  return (
    <ArticleWrapper>
      <Title>
        Barranquilla Entra en la Recta Final de las Elecciones a Alcaldía y
        Gobernación con Tendencias Claras
      </Title>
      <AuthorLine>{authors.orlando}</AuthorLine>
      <Subheader>
        La ciudad de Barranquilla se encuentra inmersa en la emoción de las
        elecciones a la alcaldía y gobernación, con un proceso que promete
        definir el futuro político y social de la región.
      </Subheader>
      <Typography paragraph>
        A medida que se acerca la fecha de votación, se vislumbran tendencias
        claras y una gran participación de la comunidad.
      </Typography>
      <Typography paragraph>
        Las elecciones para la alcaldía de Barranquilla se presentan altamente
        competitivas, con dos candidatos principales que luchan por la silla
        principal de la ciudad.
      </Typography>
      <Typography paragraph>
        Según las últimas encuestas, Alejandro Char , Partido Cambio Radical
        Partido Conservador, lidera con un 42% de apoyo, seguida de cerca por
        Antonio Bohórquez, del Polo Democrático Alternativo Pacto Histórico con
        un 38%. de intención de voto.
      </Typography>
      <Typography paragraph>
        La comunidad barranquillera se encuentra participando activamente en
        este proceso electoral, con una tasa de participación proyectada del
        78%, lo que refleja un alto nivel de interés en las decisiones políticas
        que afectarán a la ciudad en los próximos años.
      </Typography>
      <Typography paragraph>
        En cuanto a las elecciones para la gobernación del Atlántico, la carrera
        está igualmente reñida. Los dos principales candidatos, Eduardo Verano
        del partido Gobernación Liberal y Alfredo Varela del partido Gobernación
        Alianza Verde, están prácticamente empatados en las encuestas, con un
        41% y un 40% de apoyo respectivamente.
      </Typography>
      <Typography paragraph>
        La comunidad del Atlántico está siguiendo de cerca esta elección, ya que
        el próximo gobernador tendrá un papel fundamental en la gestión de
        recursos y proyectos para el departamento en los próximos años.
      </Typography>
      <Typography paragraph>
        En general, las elecciones en Barranquilla y el Atlántico están
        generando un debate animado y un alto grado de participación cívica, lo
        que refleja el interés de la comunidad en dar forma al futuro de la
        región. A medida que nos acercamos al día de las elecciones, la
        incertidumbre persiste, ya que las tendencias siguen siendo muy parejas,
        lo que hace que el resultado final sea aún más intrigante.
      </Typography>
    </ArticleWrapper>
  )
}

export default Elections
