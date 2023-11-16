import { Typography } from '@mui/material'
import React from 'react'

const AuthorLine = ({ children }) => {
  return (
    <Typography variant="body1" mb={2} component="span" display="inline-block">
      Por <strong>{children}</strong>
    </Typography>
  )
}

export default AuthorLine
