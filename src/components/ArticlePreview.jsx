import * as React from 'react'
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Card,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function ArticlePreview({ id, title, previewImage, author }) {
  const navigate = useNavigate()
  return (
    <Card
      sx={{ maxWidth: 345, height: '100%' }}
      onClick={() => {
        navigate(`/${id}`)
      }}
    >
      <CardActionArea
        disableRipple
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          alignItems: 'stretch',
        }}
      >
        <CardMedia component="img" height="140" image={previewImage} alt={id} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="caption">
            Por <strong>{author}</strong>
          </Typography>
          <Typography variant="subtitle1" component="div" lineHeight={1.5}>
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
