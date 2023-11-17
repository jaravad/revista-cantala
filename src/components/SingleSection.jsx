import React from 'react'
import ArticleWrapper from './ArticleWrapper'
import SectionHeader from './SectionHeader'
import { Unstable_Grid2 as Grid, Typography } from '@mui/material'
import ArticlePreview from './ArticlePreview'

const SingleSection = ({ name, array }) => {
  return (
    <ArticleWrapper>
      <SectionHeader>
        <Typography variant="h4">{name}</Typography>
      </SectionHeader>
      <Grid container spacing={2} mb={6} justifyContent="center">
        {array.map((n) => {
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

export default SingleSection
