import React from 'react'
import { Container } from '@mui/material'

import {
  critica,
  cronica,
  editorial,
  entrepeneurship,
  infographics,
  interviews,
  investigacion,
  news,
  opinion,
  opinionColumn,
  reportaje,
} from './data'

import Section from './components/Section'

const categories = [
  { name: 'Noticias', array: news },
  { name: 'Crónica', array: cronica },
  { name: 'Reportaje', array: reportaje },
  { name: 'Entrevistas', array: interviews },
  { name: 'Columna', array: opinion },
  { name: 'Columna de opinión', array: opinionColumn },
  { name: 'Editorial', array: editorial },
  { name: 'Emprendimiento', array: entrepeneurship },
  { name: 'Crítica', array: critica },
  { name: 'Infografías', array: infographics },
  { name: 'Columna de Investigación', array: investigacion },
]

function App() {
  return (
    <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }} className="fade-animate">
      {categories.map((c) => {
        return <Section key={c.name} {...c} />
      })}
    </Container>
  )
}

export default App
