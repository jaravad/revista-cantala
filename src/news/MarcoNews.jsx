import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import AuthorLine from '../components/AuthorLine'
import Title from '../components/Title'
import { authors } from '../data'
import { Box, Link, Typography } from '@mui/material'
import mainImg from '../assets/news/marco/1.png'

const MarcoNews = () => {
  return (
    <ArticleWrapper>
      <Title>
        Cayó uno de los integrantes de la banda llamada “los pachenca”
      </Title>
      <AuthorLine>{authors.marco}</AuthorLine>
      <Box mb={3}>
        <img src={mainImg} alt="Feria" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        José Luis Acuña Mendoza llamado popularmente como “el guajiro” fue
        capturado por la policía nacional, en la ciudad de Barranquilla en las
        horas de la tarde el día 29 de octubre{' '}
      </Typography>
      <Typography paragraph>
        La evidencia de la captura quedo grabada por medio de un celular y
        publicado por la página web Zona Cero.
      </Typography>
      <Typography paragraph>
        Este hombre es acusado por extorsionar a los comerciantes de toda
        Barranquilla, sin embargo, antes tenía una orden de captura por tener
        tres viviendas donde guardaba fusiles calibre 5.56, pero el caso fue
        ganado y, por ende, quedo en libertad. Ahora mismo esta siendo estudiado
        por las entidades superiores como lo es el juzgado.{' '}
      </Typography>
      <Typography paragraph>
        Debemos tener en cuenta que José es reconocido por el mundo del hampa.
      </Typography>
      <Typography paragraph>
        El echo sucedió exactamente en el barrio Chiquinquirá en la carrera 36
        con calle 43.{' '}
      </Typography>
      <Typography paragraph>
        Mas adelante se contará si se le concede el derecho a la libertad o es
        condenado por cierto tiempo.{' '}
      </Typography>

      <Typography variant="h6">Referencias Bibliográficas</Typography>
      <ul>
        <li>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://zonacero.com/judiciales/cayo-en-chiquinquira-alias-guajiro-senalado-de-extorsionar-para-los-pachenca"
          >
            Zonacero
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://seguimiento.co/la-region-caribe/capturan-alias-guajiro-en-barranquilla-68583"
          >
            Seguimiento.co
          </Link>
        </li>
      </ul>
    </ArticleWrapper>
  )
}

export default MarcoNews
