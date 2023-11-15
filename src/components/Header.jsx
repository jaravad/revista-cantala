import React from 'react'
import { AppBar, Box, Button, Toolbar } from '@mui/material'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: 0, borderBottom: '1px solid #f4f0ed' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: 'unset',
          }}
        >
          <img src={logo} alt="" width="200" />
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        justifyContent="center"
        borderBottom="1px solid #f7f6f5"
        px={2}
        py={1}
        boxShadow="0 3px 3px 0 rgba(0, 0, 0, 0.05)"
      >
        <Button>Noticias</Button>
        <Button>Opinión</Button>
      </Box>
    </Box>
  )
}
