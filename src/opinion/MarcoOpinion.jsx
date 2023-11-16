import React from 'react'

import ArticleWrapper from '../components/ArticleWrapper'
import AuthorLine from '../components/AuthorLine'
import Title from '../components/Title'
import { Box, Link, Typography } from '@mui/material'
import mainImg from '../assets/opinion/marco/1.png'
import secondImg from '../assets/opinion/marco/2.png'
import { authors } from '../data'

const MarcoOpinion = () => {
  return (
    <ArticleWrapper>
      <Title>La lucha de Barranquilla contra las inundaciones</Title>
      <AuthorLine>{authors.marco}</AuthorLine>
      <Box mb={3}>
        <img src={mainImg} alt="Feria" style={{ maxWidth: '100%' }} />
      </Box>
      <Typography paragraph>
        A raíz de las fuertes lluvias que se han presentado en la ciudad de
        barranquilla y en su área metropolitana, ha traído consigo problemas y
        emergencias significativas debido a los desbordamientos de los arroyos.
      </Typography>
      <Typography paragraph>
        Comenzando primero por el peligro que se refleja al momento de subir el
        arroyo, muchos ciudadanos se ven afectados por sus viviendas y sus
        pertenencias del hogar, tanto así que hay personas que dejaron perder
        todo, porque el arroyo les causo tanto daño que no tenían mas remedio
        que echar lo que quedaba a la calle.
      </Typography>
      <Typography paragraph>
        Las principales localidades que se vieron afectadas fue en el Centro,
        Rebolo y Simón Bolívar fueron las mas perjudicados por el desbordamiento
        del arroyo Don Juan. Además, en el municipio de Soledad también hubo
        unos barrios que fueron abatidos por los crecientes de muchos arroyos,
        como lo fue el barrio Villa Estadio, la Floresta, Ciudadela
        Metropolitana, Manuela Beltrán, Juan Domínguez Romero y San Antonio.
      </Typography>

      <Typography paragraph>
        Así mismo los habitantes manifestaron que hubo varios semáforos y
        arboles caídos, estas lluvias han causado estragos que la ciudadanía ha
        tomado como precaución no salir de sus casas, tanto por el miedo de que
        quizás lo puedan llevar un arroyo o les pueda causar daño algún árbol.
      </Typography>
      <Typography paragraph>
        Además de esto, estas lluvias siempre desatan una cierta cantidad de
        pandilleros que se ponen de acuerdo para ir a tirar piedras, tanto así
        que siempre que se presentan estos casos hay varias personas que salen
        causándoles daños sin razón alguno.{' '}
      </Typography>
      <Typography paragraph>
        Ahora mismo no se siente seguro ningún conductor al momento de salir,
        por el miedo de que cualquier arroyo atente contra los que van dentro
        del vehículo y poder llegar a perder esta propiedad como ya ha ocurrido
        muchas veces.
      </Typography>
      <Box mb={3} textAlign="center">
        <img
          src={secondImg}
          alt="Feria"
          style={{ maxWidth: '400px', width: '90%' }}
        />
      </Box>
      <Typography paragraph>
        Las medidas emergentes que propone el distrito para la prevención de los
        daños causados por los abordamientos de los arroyos son:
      </Typography>
      <ul>
        <li>
          <Typography paragraph>
            <strong>La canalización de arroyos:</strong> ya se están realizando
            los trámites para poder implementar el buen uso de esas
            canalizaciones y así poder mejorar el flujo de agua y controlar el
            riesgo de desbordamiento.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            <strong>Concientización ciudadana:</strong> esta medida es para que
            los ciudadanos tomen en cuenta que, al momento de arrojar cualquier
            tipo de basura al arroyo, lo que hace es aumentar la probabilidad de
            que crezca y cause daño.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            <strong>Identificación de zonas de riesgo:</strong> se están
            identificando cuales son los lugares en los que el arroyo puede
            tener mayor fuerza, para así tomar medidas de prevención adecuadas.
          </Typography>
        </li>
      </ul>
      <Typography variant="h6">Referencias Bibliográficas</Typography>
      <ul>
        <li>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.elheraldo.co/barranquilla/lluvias-en-barranquilla-atlantico-25-de-octubre-inundaciones-y-emergencias-1043795"
          >
            El Heraldo
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.bluradio.com/blu360/caribe/casas-inundadas-y-heridos-en-peleas-de-pandilla-tras-fuerte-aguacero-en-barranquilla-y-soledad-rg10"
          >
            Blu Radio
          </Link>
        </li>
      </ul>
    </ArticleWrapper>
  )
}

export default MarcoOpinion
