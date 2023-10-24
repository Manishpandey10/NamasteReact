/* 
<div>
<DIV>
</div>
*///creating multiple divs 
const parent = React.createElement("div",{id:"parent "}, 

[    React.createElement("div",{id:"child",},
    [
        React.createElement('h1',{},"this is the nested h1"),
        React.createElement('h2',{},"this is the nested h2")
    ]
)],
[
    React.createElement("div",{id:"child2",},
    [
        React.createElement('h3',{},"this is the nested h3"),
        React.createElement('h4',{},"this is the nested h4")
    ])
])


const root = ReactDOM.createRoot(document.querySelector('root')) 
root.render(parent);//object to html tag conversion her 


// const heading = React.createElement("h1",{id:"heading"},"hello there!! using React !!");//single element creation using core react 
// console.log(heading);// returns object
// root.render(heading)
// only one render will be happen, here heading will be rendered 
