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
            <Grid
              key={n.id}
              xs={12}
              sm={6}
              md={4}
              container
              justifyContent="center"
            >
              <Grid>
                <ArticlePreview {...n} />
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </ArticleWrapper>
  )
}

export default Critica
