import React from "react";
import ReactDOM from "react-dom/client";

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

// React element
const Title = () => (
  <h1 className="header" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// React Functional component

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional component</h1>
  </div>
);

const HeadingComponent2 = () => (
  <h1 className="heading">Namaste React Functional component</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
