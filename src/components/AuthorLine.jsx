import { Typography } from '@mui/material'
import React from 'react'

const AuthorLine = ({ name }) => {
  return (
    <Typography variant="body1" mb={2}>
      Por <strong>{name}</strong>
    </Typography>
  )
}

export default AuthorLine
