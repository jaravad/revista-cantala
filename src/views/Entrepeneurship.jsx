import React from 'react'
import ArticlePreview from '../components/ArticlePreview'
import Grid from '@mui/material/Unstable_Grid2'
import ArticleWrapper from '../components/ArticleWrapper'
import SectionHeader from '../components/SectionHeader'
import { entrepeneurship } from '../data'

const Entrepeneurship = () => {
  return (
    <ArticleWrapper>
      <SectionHeader>Emprendimiento</SectionHeader>
      <Grid container spacing={2} mb={6}>
        {entrepeneurship.map((n) => {
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

export default Entrepeneurship
