import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import Title from '../components/Title'
import { authors } from '../data'
import AuthorLine from '../components/AuthorLine'
import { Typography } from '@mui/material'

const Fair = () => {
  return (
    <ArticleWrapper>
      <Title>Feria de Emprendimiento caribe</Title>
      <AuthorLine>{authors.vale}</AuthorLine>
      <Typography paragraph>
        El día 2 de noviembre de 2023, en la Universidad Minuto de Dios,
        Rectoría Caribe, en la ciudad de Barranquilla, se realizó una feria
        universitaria dando a conocer los emprendimientos y las ideas de negocio
        de los estudiantes y algunos egresados.
      </Typography>
      <Typography paragraph>
        El emprendimiento "Creaciones Regina", fundado por Reina Isabell Sevas,
        es un proyecto que empezó a tomar más fuerza hace cuatro años,
        consolidándose como una microempresa. Maneja y crea sus propios
        productos elaborados en material de crochet.
      </Typography>
      <Typography paragraph>
        Además, manejan diferentes tipos de técnicas, como la fabricación a
        máquina y la técnica en crochet (a mano). De igual manera, sus productos
        van desde la moda femenina, masculina y para mascotas. Lo que
        caracteriza a “Creaciones Regina” es su servicio personalizado, que te
        permite solicitar tus prendas como más te gusten.
      </Typography>
      <Typography paragraph>
        Además, manejan diferentes tipos de técnicas, como la fabricación a
        máquina y la técnica en crochet (a mano). De igual manera, sus productos
        van desde la moda femenina, masculina y para mascotas. Lo que
        caracteriza a “Creaciones Regina” es su servicio personalizado, que te
        permite solicitar tus prendas como más te gusten.
      </Typography>
      <Typography paragraph>
        En palabras de Reina Isabel: "Mi mamá, desde muy niña, me enseñó a
        tejer. Gracias a ello y a la carrera de administración de empresas, fue
        posible consolidar mi empresa".
      </Typography>
    </ArticleWrapper>
  )
}

export default Fair
