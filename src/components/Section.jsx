import React from 'react'
import SectionHeader from './SectionHeader'
import { Unstable_Grid2 as Grid } from '@mui/material'
import ArticlePreview from './ArticlePreview'

const Section = ({ name, array }) => {
  return (
    <>
      <SectionHeader>{name}</SectionHeader>
      <Grid container spacing={2} mb={6} justifyContent="center">
        {array.map((n) => {
          return (
            <Grid
              key={n.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              container
              justifyContent="center"
            >
              <Grid flexGrow={1} container justifyContent="center">
                <Grid>
                  <ArticlePreview {...n} />
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Section
