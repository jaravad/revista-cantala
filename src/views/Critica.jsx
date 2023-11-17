import React from 'react'
import ArticlePreview from '../components/ArticlePreview'
import { critica } from '../data'
import ArticleWrapper from '../components/ArticleWrapper'
import SectionHeader from '../components/SectionHeader'
import { Unstable_Grid2 as Grid } from '@mui/material'

const Critica = () => {
  return (
    <ArticleWrapper>
      <SectionHeader>Critica</SectionHeader>
      <Grid container spacing={2} mb={6} justifyContent="center">
        {critica.map((n) => {
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

export default Critica
