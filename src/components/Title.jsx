import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ children }) => {
  return (
    <Typography mb={1} variant="h3" fontWeight={500}>
      {children}
    </Typography>
  )
}

export default Title
