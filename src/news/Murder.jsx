import React from 'react'
import { Container, Typography } from '@mui/material'

const Murder = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 2 }}>
      <Typography mb={1} variant="h2" fontWeight={500}>
        Reportan asesinato en el centro de Barranquilla
      </Typography>
      <Typography paragraph>
        Los hechos ocurriendo en la tarde de este jueves, 26 de octubre.
        Reportan que una de las víctimas se encontraba en el centro comercial
        Fedecafe
      </Typography>
      <Typography paragraph>
        Estos hechos se presentan mientras caía la lluvia en el centro de
        Barranquilla.
      </Typography>
      <Typography paragraph>
        El primer hecho se registró en el interior del centro comercial Fedecafe
        en dónde la víctima fue identificada como Juan Sebastián Castillo, en
        ese momento un sujeto que vestía de buzo, gorra y tapabocas observa a su
        víctima y luego saca una arma de fuego propinándole varios disparos a su
        objetivo, tras la fuga del asesino, el hoy occiso recibió los primeros
        auxilios y fue traslado por paramédicos y trabajadores a la clínica
        centro, dónde los médicos confirmaron su muerte. Las autoridades tras
        una rápida acción lograron capturar al supuesto asesino a quien le
        incautaron un arma de fuego.
      </Typography>
    </Container>
  )
}

export default Murder
