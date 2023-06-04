import { Stack, Box } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  /* console.log(videos); */
  if (!videos?.length) return "Loading videos...";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
          {item.id.channelId && (
            <ChannelCard channelDetail={item}></ChannelCard>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
