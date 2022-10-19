import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function VideoCard({ video }) {
  return (
    <Card sx={{ maxWidth: 400 }} elevation= {0}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image={video.url}
        sx ={{width: 250}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoCard