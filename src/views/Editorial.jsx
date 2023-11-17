import React from 'react'
import { editorial } from '../data'
import SectionHeader from '../components/SectionHeader'
import ArticleWrapper from '../components/ArticleWrapper'
import Grid from '@mui/material/Unstable_Grid2'
import ArticlePreview from '../components/ArticlePreview'

const Editorial = () => {
  return (
    <ArticleWrapper>
      <SectionHeader>Editorial</SectionHeader>
      <Grid container spacing={2} mb={6} justifyContent="center">
        {editorial.map((n) => {
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

export default Editorial
