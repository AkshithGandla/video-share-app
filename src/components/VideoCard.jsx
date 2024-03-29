import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "315px" },
        boxShadow: "none",
        borderRadius: "0px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "315px" }, height: 180 }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelTitle
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{ color: "gray", fontSize: "12px", ml: "5px" }}
            ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
