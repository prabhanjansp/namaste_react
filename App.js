/**
 * <div id="parent">
 *
 * <div id=parent>
 * <h1 id="heading">Namaste React</h1>
 * </div>
 *
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);
//heading is react element object or normal js object
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Namaste React Child"),
    React.createElement("h2", { id: "heading2" }, "Namaste React Child2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Namaste React Child"),
    React.createElement("h2", { id: "heading2" }, "Namaste React Child2"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
