import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import SectionHeader from '../components/SectionHeader'
import { interviews } from '../data'
import ArticlePreview from '../components/ArticlePreview'
import { Unstable_Grid2 as Grid } from '@mui/material'

const Interviews = () => {
  return (
    <ArticleWrapper>
      <SectionHeader>Entrevistas</SectionHeader>
      <Grid container spacing={2} mb={6} justifyContent="center">
        {interviews.map((n) => {
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

export default Interviews
