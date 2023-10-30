                           Theory Assignment
- - - - - - - - - - -- - - - -- - - - - - - -- - - - - - - - - - - - - - - -  
Asiignment 
1-is JSx Mandatory for React
ans- Jsx is not mandatory for the react , we can write react code without Jsx but jsx makes our code more readable and easy to understand , we can create write html like syntax using JSx <></> , without JSX we can create React element using React.creatElement() method also 
------------------------------------------
2- is es6 mandatory for react
ans- It is not mandatory for react, but it is reccommended to use Es6 syntax, we get arrow functions in es6, which make us easy to write codes, we can use map() if we are writing our react code in React.
- DeStructuring is syntax taht allows you to extract value from objects/ Arrays and assign it to variables.
- Modules are Es6 part.

-------------------------------------------------------------

3-{<Title/>} v {<Title></Title>} vs {(Title)} in JSx.
Ans : <Title/ > and <TitleComponent><TitleComponent/> are both in the same  and the second <></> is mostly used when there is a child in the component. (Title) is kind of the syntax when we want to evaluate to React Element. 
_________________________________________________________________________________

4- How to write comments in JSx
ans- {/* Comment */}
____________________________________________________________________________________
5- waht is <React.fragment></React.Fragment>and <></>
ans- React Fragments allows us to group multiple elements without adding extra nodes in the DOM. React Component expect to return one HTML elements , we can return only one HTML element, so how do we pass on multiple elements/tags in one react component.
here we use fragments , we can retun one <div><div/> and inside that one div we can pass all our multiple tags inside pf it without any problem <></> is also similar. empty fragment tag is shorthand for <fragment><fragment/> tag
__________________________________________________________________________________
6- what is virtual DOM
ans- Virtual DOM , you can see it as a Copy of the Original DOM, any there are changes made in the page , any render happens the changes are made at that virtual DOM & Virtual DOm and Original DOM are compared and components which are changed are Rendered and only those component are rendered.it is fast since virtual dom in not repainted on the screen and compared components are chanegd and are painted on the Screen to user. done using Diffing algorithm.
React use Diffing Algo. in this, react compares virtual DOM trees of previous and current   states of the UI and identifies the diffrences in them. once diff are identifies, react updates only wheer neccessary and making ui faster and efficient  

________________________________________________________________________________

7- Reconcilliation in react?
ans- it is the process of a Syncing of Virtual and Original DOM.Compares the current state of the UI and previous state of the UI and pointing out the set of changes needed for updating ui.

_________________________________________________________________________________
8- React Fiber?
ans-React fiber is default reconciler after react16. This is used to render a system faster and smoother.
It foucuses on animation and responsiveness., it splits work in chunks, priortize tasks, pause and come back to work on that , reuse completed  work and abort it when not needed.

_______________________________________________________________________________
9- Needs of Keys in React.when are keys are needed
ans- Use of keys is importatnt as keys are identifies what items have been changed, added, removed, sorted , updates etc. and helps to keep tracks.
_____________________________________________________________________________
10- why not to use index as key in React?
ans- Index can make performance problems , indexing is not reccomended, say in case of sorting or filtering the indexed component may cause some problems in our code. indexed values can be shuffled and it is no longer unique and react cannot diff objects optimally. 
________________________________________________________________________
11- Props in react? ways to Pass Props
ans- passing a prop to fn == passing a argument to a function
Functional component is simply saying is a Javascript function.
_________________________________________________________________________________________
12- Config driven UI
ans- config-driven UI
 UI based on config , config comes from database, data from the DB !
 for examples, Offer on food delivery can be diffrent from city, to city, so we can pass values and data in Json i.e our data from DB then we can use that data and update the UI accordingly.
 and also Veg/ Non- veg restro ' vegan restro can be filtreation and updation can be done also.

-______________________________________________________________________________-
- - - - - - - - - - - -- - - - - - - - -- - - - - - - - - - - - - - - - - -- -                            