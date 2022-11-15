import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function VideoCard({ video }: any) {
  const {
    fileBase64String,
    metadata: { title, description },
  } = video;
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image={`data:image/jpeg;base64,${fileBase64String}`}
        sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
      />
      <CardContent sx={{ height: "106px" }}>
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

export default VideoCard;
