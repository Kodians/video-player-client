import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function VideoCard({ video }) {
  const {
    fileBase64String,
    metadata: { title, description },
  } = video;
  return (
    <Card sx={{ maxWidth: 345 }} elevation= {0}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image={`data:image/jpeg;base64,${fileBase64String}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoCard