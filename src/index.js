//var React=require('react')
import React from "react";
import ReactDOM from "react-dom";
//'var ReactDOM=require('react-dom');
//html jaisa dikhne wala jsx
//ReactDOM.render(kya,kahan,callback)
//Bable inside the scene
/*ReactDOM.render(
  React.createElement("h1", null, "Hi There"),
  document.getElementById("root")
);*/
/*var h1 = document.createElement("h1");
h1.innerHTML = "Manish Kumar";
document.getElementById("root").appendChild(h1);*/
//ReactDOM.render(<><h1>Hi Manish</h1><h1>Hi rajat</h1></>,document.getElementById('root'));
//ReactDOM.render(<div><h1>Hi Manish</h1><h1>Hi rajat</h1></div>,document.getElementById('root'));
//ReactDOM.render([<h1>Manish</h1>,<h1>Rajat</h1>],document.getElementById('root'));

var arr = [<h1>manish</h1>, <h2>rajat</h2>, <h3>astu</h3>];
ReactDOM.render(arr, document.getElementById("root"));
