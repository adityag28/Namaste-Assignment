import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", {}, "React Nested Structure !!!")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
