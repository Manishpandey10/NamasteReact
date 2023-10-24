import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement("div",{id:"parent "}, 

[    React.createElement("div",{id:"child",},
    [
        React.createElement('h1',{},"Manish this side !!! 🔥"),
        React.createElement('h2',{},"this is the nested h2 in child 1")
    ]
)],// here we use array so that we can create more than one childern to the div , and we can do as many as we can 
[
    React.createElement("div",{id:"child2",},
    [
        React.createElement('h3',{},"this is the nested h3 in child 2"),
        React.createElement('h4',{},"this is the nested h4 in child 2")
    ])
])


const root = ReactDOM.createRoot(document.querySelector('root')) 
root.render(parent);