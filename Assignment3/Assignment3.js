// Create Header Component using JSX below
import React from "react";
import ReactDOM  from "react-dom/client";
import './Header.css';

// const Heading = ()=>
// {
//     return(
//         <header className="header">
//             <div className="logo">Logo</div>
//             <input type="text" className="search-bar" placeholder="Search..." />
//             <div className="user-icon">User Icon</div>
//         </header>
//     );
// };

// const root = ReactDOM.createRoot(document.querySelector("root"))
// root.render(<Heading />)
//******************************************************************* */
//Creating a NEsted elements using React.createElement 
// const heading = React.createElement("h1",{id:"heading1", class:"title"},
// [
//     React.createElement("h2",{id:"heading2"},
//     [
//         React.createElement("h3",{id:"heading3"}, "this is child of the child !!")
//     ])
// ])

// const root = ReactDOM.createRoot(document.querySelector("root"))
// root.render(heading)
//*******************Creating the same thing using JSX Lets go************************************ */
// const Title = ()=>{
//     return <h1 className="head">This is External Title</h1>
// }
// const Heading = ()=>{
//     return (
//     <div className="Title">
//         <h1>This is h1
//         </h1>
//         <Title></Title>
//         <Title/>
//         {<Title/>}
//         <h2>THis is H2</h2>
//         <h3> this is H3</h3>
//     </div>
//     )
// }

// const root = ReactDOM.createRoot(document.querySelector("root"))
// root.render(<Heading></Heading>)

//**************************************************************************************************** */