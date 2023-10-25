import React from "react";
import ReactDOM  from "react-dom/client";
// react element 
/* const heading = React.createElement("h1",{id='heading',"this is old way to add DomElement"}
) 
const root = ReactDom.createElement(document.getElementById('root))
root.render(heading)*/

// using JSX (this code will be transpiled by bundler to make it understandable for browser) code-> Parcel -> Babel , babel transpiles jsx code 
// babel converts JSX => React.CreateElement =>ReactElement.js object => HTMLELEMENT (render)

//  const JsxHeading = <h1 id="heading">Hola Amigo !!</h1> 
// //  console.log(JsxHeading); this returns a object
//  //JS engine won't be able to compute this , bcz this is not a correct syntax 

//  const root = ReactDOM.createRoot(document.querySelector("root"))
//  root.render(JsxHeading )

//React component below

//Functional component
// const Title =()=>{
//     return <h1 className="heading">MAnish this Side 🔥</h1>
// }

// const title2 = ()=>{
//     return <h1 className="Head"> this is a simple react element </h1>

// }

// const number = 1000

// //component composition , component inside of component 
// const Heading =()=>{
//     return <>
//     the Number divided by 2 is {number/2} 
//     <br/>
//     original number :{number}
//     <div>
//     {title2()}
//     </div>
//     <Title/>
//     <h1 >Functional component</h1>
//     </>
// }
// const root = ReactDOM.createRoot(document.querySelector("root"))
// root.render(<Heading />)

// ******************aBOVE IS CLASS CODE *************************************
