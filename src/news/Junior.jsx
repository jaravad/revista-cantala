import React from 'react'
import { Box, Typography } from '@mui/material'
import junior from '../assets/junior.png'
import ArticleWrapper from '../components/ArticleWrapper'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import Title from '../components/Title'
import Subheader from '../components/Subheader'

const Junior = () => {
  return (
    <ArticleWrapper>
      <Title>
        Junior, con el apoyo de 'Cariaco', vuela a los cuadrangulares
      </Title>
      <AuthorLine>{authors.vale}</AuthorLine>
      <Subheader>
        El futbolista agradeció el esfuerzo de sus compañeros por la
        clasificación del equipo a los cuadrangulares.
      </Subheader>
      <Box mb={2}>
        <img src={junior} alt="Cariaco" style={{ maxWidth: '100%' }} />
        <Typography variant="caption">
          Luis ‘Cariaco’ González intentando eludir a jugadores del
          Huila.Jeisson Gutiérrez
        </Typography>
      </Box>
      <Typography paragraph>
        La mejora experimentada por Junior en la segunda mitad del semestre se
        debe en gran medida a la destacada actuación de Luis González. El
        extremo ha sido el jugador más destacado del equipo y ha contribuido
        significativamente a la clasificación del club a las cuadrangulares
        semifinales de la Liga-II con sus goles y asistencias. Sin embargo, Luis
        González no busca atribuirse el mérito, sino que, por el contrario,
        agradece a sus compañeros por el nivel que han demostrado y por el
        avance a la siguiente ronda.
      </Typography>
      <Typography paragraph>
        En sus propias palabras, "La gloria sea para Dios. Quiero expresar mi
        gratitud a mis compañeros por darnos esta clasificación a todos
        nosotros, a nuestras familias ya quienes nos apoyan. Fue un camino
        difícil, pero cuando paramos al América, deseamos que las cosas salieran
        bien. A pesar de los obstáculos, siempre hemos luchado por elevar a
        Junior y hemos logrado clasificar”, señaló.
      </Typography>
      <Typography paragraph>
        Luis González, quien fue nombrado como el jugador destacado en la
        victoria 2-0 de los rojiblancos sobre Atlético Huila, afirmó que el
        partido se desarrolló según lo planeado por el equipo. "Nuestra
        estrategia era marcar temprano y controlar el juego. Aunque la gente
        suele querer que ataquemos más, gestionamos el partido de manera
        efectiva. Tuvimos algunas oportunidades que no logramos concretar.
        Estamos tranquilos porque el equipo sigue mejorando y hemos sumado 9
        puntos en los últimos tres partidos”, dijo.
      </Typography>
      <Typography paragraph>
        'Cariaco' también mencionó que ve a todo el grupo en buena forma física
        de cara a la fase final del torneo, donde buscarán su décima estrella.
        "El equipo está en buena forma física. Tuvimos que administrar el juego
        en algunos momentos, ya que los primeros minutos fueron intensos. Hemos
        tenido una semana de entrenamiento físico sólido. Nuestra estrategia era
        la correcta, marcando temprano. Con vistas a las finales, Creemos que
        llegamos en buena forma", explicó.
      </Typography>
      <Typography paragraph>
        Finalmente, se le preguntó a Luis González sobre la posibilidad de
        representar a la selección de Venezuela, y expresó su deseo de que esa
        "convocatoria llegue pronto". "Como cualquier futbolista, deseo
        representar a mi país; no soy una excepción. Mi prioridad es trabajar
        para Junior, y luego para estar en la Selección. La decisión final la
        toman ellos, mientras yo continúo trabajando. Estoy contento por nuestra
        clasificación a las ", algo que no logramos finales el semestre pasado.
        Estoy disfrutando mucho y espero que, con la ayuda de Dios, la
        convocatoria se materialice pronto", concluyó.{' '}
      </Typography>
    </ArticleWrapper>
  )
}

export default Junior
