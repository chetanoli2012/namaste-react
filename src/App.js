import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

// React's core method of creating elements
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// const child = React.createElement("div", { id: "child" }, heading);
// const parent = React.createElement("div", { id: "parent" }, child);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
