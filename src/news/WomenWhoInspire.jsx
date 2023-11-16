import React from 'react'
import { Typography } from '@mui/material'
import ArticleWrapper from '../components/ArticleWrapper'
import AuthorLine from '../components/AuthorLine'

const WomenWhoInspire = () => {
  return (
    <ArticleWrapper>
      <Typography mb={1} variant="h3" fontWeight={500}>
        Mujeres que inspiran
      </Typography>
      <AuthorLine name="Cristian Alvarez" />
      <Typography variant="h6" fontWeight={300} mb={2}>
        "Soy una mujer apasionada por su carrera, amo contar historias y hoy
        tengo la fortuna de hacerlo a través de esta corona"
      </Typography>
      <Typography paragraph>
        Quien era Yuruby antes de ser reina, era un chica amante de su carrera,
        fanática de contar historias y siempre llevar este patrimonio por cual
        lenguajes cultural, el carnaval es sus amor y siempre será la ilusión
        mas grande, fueron la palabras mencionada por recién premiada mejor
        crónica en la unos premios al marco del carnaval de barranquilla
      </Typography>
      <Typography paragraph>
        Una experiencia me dejo mucho, unas chicas maravillosas mujer que de
        verdad admiro demasiado, encontré en ellas una amistad muy hermosa,
        aludo que no competimos, vivimos disfrutamos de cada segundo de este
        certamen.
      </Typography>
      <Typography paragraph>
        Los más complicado de esto, será dejar la corona. pero lo hare con la
        misma ilusión con la que la antecesora de mi reinado lo hizo, todas
        tenemos una gran misión y es salvaguarda la tradición y llevar por cada
        rincón de esta cuidad el carnaval.
      </Typography>
      <Typography>
        Yuruby Valentina Mendoza Ricardo, Tengo 23 años, soy comunicadora
        social, egresada de la universidad Sergio arboleda, amante de la cultura
        y contar historias, una mujer líder y caracterizada por la pasión de mi
        profesión. Ganadora de uno de los premios más prestigiosos en el marco
        del carnaval de Barranquilla y ahora porto la corona como Reina popular,
        llevando el nombre de cada barrio por estas fiestas.
      </Typography>
    </ArticleWrapper>
  )
}

export default WomenWhoInspire
