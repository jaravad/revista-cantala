import React from 'react'
import { Container } from '@mui/material'

const ArticleWrapper = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ pt: 3, pb: 6 }}>
      {children}
    </Container>
  )
}

export default ArticleWrapper
