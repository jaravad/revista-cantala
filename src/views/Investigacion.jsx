import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import SectionHeader from '../components/SectionHeader'
import { Grid } from '@mui/material'
import { investigacion } from '../data'
import ArticlePreview from '../components/ArticlePreview'

const Investigacion = () => {
  return (
    <ArticleWrapper>
      <SectionHeader>Columna de Investigacion</SectionHeader>
      <Grid container spacing={2} mb={6} justifyContent="center">
        {investigacion.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
    </ArticleWrapper>
  )
}

export default Investigacion
