import React from "react";
import Typography from "@material-ui/core/Typography";

export default ({ match }) => {
  const phrase = match.params.phrase;
  return <Typography variant="h4">Search results for: {phrase}</Typography>;
};
