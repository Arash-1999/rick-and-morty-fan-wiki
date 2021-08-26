import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";

import { getCharsByQuery } from "./../../store/charsSlice.js";

import Button from "./../btn.js";
import TextField from "./../textfield.js";

const Label = styled.label`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Search = () => {
  const [query, setQuery] = useState("");
  const dispacth = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispacth(getCharsByQuery(query));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="query">Name: </Label>
      <TextField onChange={(e) => {setQuery(e.target.value)}} value={query} type="text" id="query" />
      <Button role="button" type="submit">Search</Button>
    </form>
  );
};

export default Search;
