import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Feed,
  SearchFeed,
  VideoDetail,
  ChannelDetail,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Feed></Feed>}></Route>
          <Route
            path="/video/:id"
            element={<VideoDetail></VideoDetail>}
          ></Route>
          <Route
            path="/channel/:id"
            element={<ChannelDetail></ChannelDetail>}
          ></Route>
          <Route
            path="/search/:searchTerm"
            element={<SearchFeed></SearchFeed>}
          ></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
