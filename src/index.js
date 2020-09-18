import "./style.scss";
// import pngImg from "images/png.png";
// import personImg from "images/user.svg";

// function element() {
//   const el = document.createElement("h1");
//   el.classList.add("hello");
//   el.innerText = "Hello Webpack!";

//   const icon = new Image();
//   icon.src = pngImg;
//   icon.width = 32;
//   icon.height = 32;
//   el.appendChild(icon);

//   const icon2 = new Image();
//   icon.src = personImg;
//   icon.width = 32;
//   icon.height = 32;
//   el.appendChild(icon2);

//   const btn = document.createElement("button");
//   btn.onclick = () => alert("test");
//   btn.innerText = "test";
//   el.appendChild(btn);

//   return el;
// }

// document.body.appendChild(element());

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>Hello Webpack</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
