import { Typography } from '@mui/material'
import React from 'react'

const Subheader = ({ children }) => {
  return (
    <Typography variant="h6" fontWeight={300} mb={2}>
      {children}
    </Typography>
  )
}

export default Subheader
