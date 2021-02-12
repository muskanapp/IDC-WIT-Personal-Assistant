import React from "react";
import { Nav } from "shards-react";

const styling = {
    fontSize : "40px",
    // marginLeft : "200px",
    color : "black",
}

export default () => (
  <Nav navbar className="border-left flex-row">
    <div>
      <h1 style={styling}>Personal Assistant</h1>
    </div>
  </Nav>
);
