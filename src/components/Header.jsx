import React from 'react'
import { AppBar, Box, Button, Toolbar } from '@mui/material'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }} className="fade-animate">
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
        flexWrap="wrap"
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
            navigate('/columna')
          }}
        >
          Columna
        </Button>
        <Button
          onClick={() => {
            navigate('/emprendimiento')
          }}
        >
          Emprendimiento
        </Button>
        <Button
          onClick={() => {
            navigate('/critica')
          }}
        >
          Crítica
        </Button>
        <Button
          onClick={() => {
            navigate('/infografias')
          }}
        >
          Infografías
        </Button>
        <Button
          onClick={() => {
            navigate('/entrevistas')
          }}
        >
          Entrevistas
        </Button>
        <Button
          onClick={() => {
            navigate('/reportaje')
          }}
        >
          Reportaje
        </Button>
      </Box>
    </Box>
  )
}
