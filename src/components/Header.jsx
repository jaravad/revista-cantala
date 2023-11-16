import React from 'react'
import { AppBar, Box, Button, Toolbar } from '@mui/material'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
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
          <Link to="/">
            <img src={logo} alt="" width="200" />
          </Link>
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
        <Button
          onClick={() => {
            navigate('/noticias')
          }}
        >
          Noticias
        </Button>
        <Button
          onClick={() => {
            navigate('/opinion')
          }}
        >
          Opinión
        </Button>
        <Button
          onClick={() => {
            navigate('/infografias')
          }}
        >
          Infografías
        </Button>
      </Box>
    </Box>
  )
}
