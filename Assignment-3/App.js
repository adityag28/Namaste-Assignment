import React from "react";
import ReactDOM from "react-dom/client";
import { RiReactjsLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

// //Nested structure using React.createElement()
// const heading = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "Heading 1"),
//   React.createElement("h2", {}, "Heading 2"),
//   React.createElement("h3", {}, "Heading 3"),
// ]);

// //Nested structure using JSX
// const heading2 = (
//   <div className="title">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );

// // Nested structure using Functional Component
// const HeadingComponent = () => (
//   <div className="title">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );

// const Title = () => (
//   <div className="title">
//     {heading}
//     {heading2}
//     {<HeadingComponent />}
//   </div>
// );

// Header Funcrtional Component

const Header = () => (
  <div className="header">
    <RiReactjsLine />
    <input type="text" placeholder="Search here" />
    <FaUser />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
