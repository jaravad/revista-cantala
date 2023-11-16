import React from 'react'
import { opinion } from '../data'
import SectionHeader from '../components/SectionHeader'
import ArticleWrapper from '../components/ArticleWrapper'
import Grid from '@mui/material/Unstable_Grid2'
import ArticlePreview from '../components/ArticlePreview'

const Columns = () => {
  return (
    <ArticleWrapper>
      <SectionHeader>Columnna</SectionHeader>
      <Grid container spacing={2} mb={6}>
        {opinion.map((n) => {
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

export default Columns
