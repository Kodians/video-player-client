import React, { useState } from "react";
import router from "next/router";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onhandleSubmit = (e: any) => {
    e.preventDefault();

    if (searchTerm) {
      router.push(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e: any) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#2F80ED" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
