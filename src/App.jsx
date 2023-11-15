import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { news } from './data'
import ArticlePreview from './components/ArticlePreview'

function App() {
  return (
    <>
      <Container maxWidth="md" sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          {news.map((n) => {
            return (
              <Grid key={n.id} xs={4}>
                <ArticlePreview {...n} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default App
