import React from 'react'
import { Container } from '@mui/material'

const ArticleWrapper = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ pt: 4, pb: 8 }} className="fade-animate">
      {children}
    </Container>
  )
}

export default ArticleWrapper
