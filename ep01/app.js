/* 
<div>
<DIV> this kind of dom can be obtained by using method written below
</div>
*///creating multiple divs 
// const parent = React.createElement("div",{id:"parent "}, 

// [    React.createElement("div",{id:"child",},
//     [
//         React.createElement('h1',{},"this is the nested h1"),
//         React.createElement('h2',{},"this is the nested h2")
//     ]
// )],// here we use array so that we can create more than one childern to the div , and we can do as many as we can 
// [
//     React.createElement("div",{id:"child2",},
//     [
//         React.createElement('h3',{},"this is the nested h3"),
//         React.createElement('h4',{},"this is the nested h4")
//     ])
// ])

// const root = ReactDOM.createRoot(document.querySelector('root')) 
// root.render(parent);//object to html tag conversion her 


const heading = React.createElement("h1",{id:"heading"},"hello there!! using React !!");//single element creation using core react 
console.log(heading);// returns object
root.render(heading)
// only one render will be happen, here heading will be rendered 


/* ABOUt ARROW FUNCTIONS*
arraow functions are compact version of traditional fucntion , 
where we write functions as function(parameters){}
we can simply do this, 
(params)=>{arguments}
unlike functions arrow functions do not have it's this keyword, we can use this keyword but that this will be lexically bound
i.e this will take context of the lexical scope in which the function is defined , it will not take the context of the function ()=>{} arrow fn do not have its own (this). 
arrow fn cannot be used as constructor/methods
*/
