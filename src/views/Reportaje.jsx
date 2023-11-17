import React from 'react'
import ArticlePreview from '../components/ArticlePreview'
import { Unstable_Grid2 as Grid } from '@mui/material'
import ArticleWrapper from '../components/ArticleWrapper'
import SectionHeader from '../components/SectionHeader'
import { reportaje } from '../data'

const Reportaje = () => {
  return (
    <ArticleWrapper>
      <SectionHeader>Reportaje</SectionHeader>
      <Grid container spacing={2} mb={6}>
        {reportaje.map((n) => {
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

export default Reportaje
