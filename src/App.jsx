import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import {
  critica,
  cronica,
  entrepeneurship,
  infographics,
  interviews,
  investigacion,
  news,
  opinion,
  opinionColumn,
  reportaje,
} from './data'
import ArticlePreview from './components/ArticlePreview'
import SectionHeader from './components/SectionHeader'

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }} className="fade-animate">
      <Box borderBottom="1px solid #e4e4e4" pb={2} textAlign="center" mb={3}>
        <Typography variant="h4">Noticias</Typography>
      </Box>
      <Grid container spacing={2} mb={6}>
        {news.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
      <SectionHeader>Crónica</SectionHeader>
      <Grid container spacing={2} mb={6}>
        {cronica.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
      <SectionHeader>Reportaje</SectionHeader>
      <Grid container spacing={2} mb={6}>
        {reportaje.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
      <SectionHeader>Entrevistas</SectionHeader>
      <Grid container spacing={2} mb={6}>
        {interviews.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
      <Box borderBottom="1px solid #e4e4e4" pb={2} textAlign="center" mb={3}>
        <Typography variant="h4">Columna</Typography>
      </Box>
      <Grid container spacing={2} mb={6}>
        {opinion.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
      <Box borderBottom="1px solid #e4e4e4" pb={2} textAlign="center" mb={3}>
        <Typography variant="h4">Columna de opinión</Typography>
      </Box>
      <Grid container spacing={2} mb={6}>
        {opinionColumn.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>

      <Box borderBottom="1px solid #e4e4e4" pb={2} textAlign="center" mb={3}>
        <Typography variant="h4">Emprendimiento</Typography>
      </Box>
      <Grid container spacing={2} mb={6}>
        {entrepeneurship.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
      <Box borderBottom="1px solid #e4e4e4" pb={2} textAlign="center" mb={3}>
        <Typography variant="h4">Crítica</Typography>
      </Box>
      <Grid container spacing={2} mb={6}>
        {critica.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
      <Box borderBottom="1px solid #e4e4e4" pb={2} textAlign="center" mb={3}>
        <Typography variant="h4">Infografías</Typography>
      </Box>
      <Grid container spacing={2} mb={6}>
        {infographics.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
      <Box borderBottom="1px solid #e4e4e4" pb={2} textAlign="center" mb={3}>
        <Typography variant="h4">Columna de Investigación</Typography>
      </Box>
      <Grid container spacing={2} mb={6}>
        {investigacion.map((n) => {
          return (
            <Grid key={n.id} xs={6} sm={4} md={3}>
              <ArticlePreview {...n} />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default App
