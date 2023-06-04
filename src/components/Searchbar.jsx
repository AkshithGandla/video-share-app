import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      console.log("Search term: ", searchTerm);
      navigate(`/search/${searchTerm}`);
    }

    setSearchTerm("");
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          console.log(searchTerm);
        }}
      ></input>
      <IconButton type="submit">
        <Search sx={{ padding: "1px", color: "red" }}></Search>
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
