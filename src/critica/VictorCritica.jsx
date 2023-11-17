import { Box, Typography } from '@mui/material'
import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import mainImg from '../assets/critica/victor/1.jpeg'

const VictorCritica = () => {
  return (
    <ArticleWrapper>
      <Title>
        La Cobertura de los Medios en el Mundial de Fútbol: Enfoque en lo
        Sensacional en Lugar de lo Deportivo
      </Title>
      <AuthorLine>{authors.victor}</AuthorLine>
      <Box mb={2}>
        <img src={mainImg} alt="Messi" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        Crítica: La cobertura mediática del Mundial de Fútbol 2022 ha dejado
        mucho que desear en términos de enfoque y profundidad. Como es sabido
        hace unos meses fue el mundial, el torneo más importante del mundo del
        futbol. En ese tiempo en lugar de destacar lo que debería ser el aspecto
        central: el fútbol en sí, la mayoría de los medios de comunicación se
        han centrado en historias sensacionales y controversias fuera del campo.
      </Typography>
      <Typography paragraph>
        Uno de los ejemplos más notorios de esta tendencia es la cantidad
        abrumadora de atención que se ha dado a las discusiones y peleas entre
        jugadores en las redes sociales. Si bien es cierto que estas
        interacciones pueden ser entretenidas, no deberían eclipsar la cobertura
        de los partidos en el campo. Los medios han perdido de vista el
        verdadero propósito del Mundial: celebrar el fútbol y el talento de los
        deportistas.
      </Typography>
      <Typography paragraph>
        Otro aspecto crítico es la falta de análisis táctico y en profundidad de
        los partidos. Las reseñas de los partidos han sido superficiales en el
        mejor de los casos, y la mayoría de los informes se centran en el
        sensacionalismo. Los periodistas deportivos deberían asumir la
        responsabilidad de brindar a los lectores una comprensión más completa
        de lo que está sucediendo en el campo.
      </Typography>
      <Typography paragraph>
        Además, la cobertura mediática parece estar obsesionada con las
        historias de vida de los jugadores, a menudo a expensas de la cobertura
        del juego en sí. Si bien es valioso conocer a los jugadores más allá del
        campo, esto no debería desplazar el enfoque principal en los partidos y
        las tácticas.
      </Typography>
      <Typography paragraph>
        En resumen, la cobertura mediática del Mundial de Fútbol 2022 ha estado
        plagada de sensacionalismo, falta de análisis en profundidad y una
        obsesión excesiva con la vida de los jugadores. Es hora de que los
        medios deportivos se vuelvan a concentrar en el fútbol que es lo
        principal y en dar cobertura informativa y equilibrada a los aficionados
        de este emocionante evento deportivo que mueve masas mundialmente.
      </Typography>
    </ArticleWrapper>
  )
}

export default VictorCritica
