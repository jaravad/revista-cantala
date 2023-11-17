import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import { Typography, Unstable_Grid2 as Grid } from '@mui/material'
import ArticlePreview from '../components/ArticlePreview'
import { infographics } from '../data'
import SectionHeader from '../components/SectionHeader'

const Infographics = () => {
  return (
    <ArticleWrapper>
      <SectionHeader>
        <Typography variant="h4">Infografías</Typography>
      </SectionHeader>
      <Grid container spacing={2} mb={6}>
        {infographics.map((n) => {
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

export default Infographics
