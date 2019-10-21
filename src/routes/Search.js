import React from "react";

const Search = ({ match }) => {
  const phrase = match.params.phrase;
  return <h1>Search results for: {phrase}</h1>;
};

export default Search;
