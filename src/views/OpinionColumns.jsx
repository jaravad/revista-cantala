import React from 'react'
import ArticleWrapper from '../components/ArticleWrapper'
import SectionHeader from '../components/SectionHeader'
import { Unstable_Grid2 as Grid } from '@mui/material'
import { opinionColumn } from '../data'
import ArticlePreview from '../components/ArticlePreview'

const OpinionColumns = () => {
  return (
    <ArticleWrapper>
      <SectionHeader>Columnna de opinión</SectionHeader>
      <Grid container spacing={2} mb={6} justifyContent="center">
        {opinionColumn.map((n) => {
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

export default OpinionColumns
