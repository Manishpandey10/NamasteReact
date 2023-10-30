# ep04

inline css in JSX , pass it to a js object 
const styles={
    background-color:blue
}
and passing it to a component function like this,
const fn=()=>{
    return(
        <div className='div' style={styles}>
            "hey!!
        </div>
    )
}
or <div styles={{backgroundColor:"#f0f0f0"}}/>
=======================================================================
What is prop! at the ends of the day are normal arguments to a function
passing a prop to fn == passing a argument to a function
Functional component is simply saying is a Javascript function 

destructuring-on-the-fly
fucntion =(props)=>{

} 
will be 
 fucntion= ({prop.val1, prop.val2})=>
 {

 }

 ==========================

 config-driven UI
 UI based on config , config comes from database, data from the DB !
 for examples, Offer on food delivery can be diffrent from city, to city, so we can pass values and data in Json i.e our data from DB then we can use that data and update the UI accordingly.
 and also Veg/ Non- veg restro ' vegan restro can be filtreation and updation can be done also.

 =========================================================================
unique key property
 whenever we use map , each item iterated should be represented uniquely.
 *related to rendering.

 index should not be taken as keys, it's a bad practice(acc. to React)
 ======================================================================
# ep05

Two types of Exports/imports.
 - default way Export/Import
 export default Component;
 import Component from "path"

 - Named Export/import
 export const Component=()=>{}
 import {Component} from "path"

 -----
=> React Hooks
 (normal Js utility function developed by React developers)
- useState() = when ever state variable is updated react re-renders the component
- useEffect() 
