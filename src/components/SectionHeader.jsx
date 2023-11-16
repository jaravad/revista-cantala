import { Box, Typography } from '@mui/material'
import React from 'react'

const SectionHeader = ({ children }) => {
  return (
    <Box borderBottom="1px solid #e4e4e4" pb={2} textAlign="center" mb={3}>
      <Typography variant="h4">{children}</Typography>
    </Box>
  )
}

export default SectionHeader
