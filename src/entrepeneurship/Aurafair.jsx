import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import AuthorLine from '../components/AuthorLine'
import { authors } from '../data'
import { Typography } from '@mui/material'

const AuraFair = () => {
  return (
    <ArticleWrapper>
      <Title>Marca de Ropa de Monica y Sara</Title>
      <AuthorLine>{authors.aura}</AuthorLine>
      <Typography paragraph>
        El 2 de noviembre se llevó a cabo la feria de emprendimiento caribe
        2023, un espacio organizado por la corporación universitaria Minuto de
        Dios Barranquilla, lugar que se prestó para que estudiantes se
        apropiaran del campus, para brindar diferentes servicios a la comunidad
        educativa.
      </Typography>

      <Typography paragraph>
        Mónica y Sara estudiantes de administración presentaron su emprendiendo
        donde diseñan una marca de ropa propia, ellas diseñan y arman outfit
        para vender de manera individual o por separado, Mónica se encarga de
        diseñar y sara de la elección de telas y calidad.
      </Typography>
      <Typography paragraph>
        "Áreas que en algún momento corrían paralelas, ahora encuentran puntos
        comunes, como es el caso de la epidemiología molecular que incorpora
        elementos propios de la genómica y biología molecular para asistir al
        fin último de la epidemiología, al comprender la influencia de la
        individualidad humana en el patrón observado de las enfermedades. Así
        que la epidemiologia molecular es una de esas novedades que rendirán
        información útil tanto al individuo como a los sistemas de salud",
        agrega San Juan.
      </Typography>
      <Typography paragraph>
        Comentan que es un trabajo muy riguroso y de máximo esfuerzo ya que
        deben manejar el tiempo para su emprendimiento, familia y estudios pero
        lo más importante de todo esto es que son cómplices en todo, su amistad
        ha trascendido desde que son muy pequeñas y es un sueño que vienen
        materializando desde que se dieron cuenta que les gustaba el diseño y la
        moda.
      </Typography>
    </ArticleWrapper>
  )
}

export default AuraFair
