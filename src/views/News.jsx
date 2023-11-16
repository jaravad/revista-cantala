import React from 'react'
import ArticlePreview from '../components/ArticlePreview'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { news } from '../data'
import ArticleWrapper from '../components/ArticleWrapper'

const News = () => {
  return (
    <ArticleWrapper>
      <Box borderBottom="1px solid #e4e4e4" pb={2} textAlign="center" mb={3}>
        <Typography variant="h4">Noticias</Typography>
      </Box>
      <Grid container spacing={2} mb={6}>
        {news.map((n) => {
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

export default News
