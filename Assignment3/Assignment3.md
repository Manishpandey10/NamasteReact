1- what is JSx ?
JSx stands for Javascript XML, it enables us to write HTML-like syntax in our javascript , JSX in not required for writing react code but it makes our code more easy and readable.
=====================================================
using JSX (this code will be transpiled by bundler to make it understandable for browser) code-> Parcel -> Babel , babel transpiles jsx code 
babel converts JSX => React.CreateElement =>ReactElement.js object => HTMLELEMENT (render)
----------------------------------------------------------
2-  Superpower of JSx
ans- HMTL like syntax 
- we can write javascript inside curly braces{}, we can even use funtion inside jsx {function()}
- JSx converts HTML tags into react element.

------------------------------------------------------------------------
3- {TitleComponent} vs {<TitleComponent />} vs {<Titlecomponent></TitleComponent>}
ans -  they're all in the same, its is just the way of writiing the code it gives the same answer.
--------------------------------------------------------------------------------------------

4- Role of Type in Script tag.
ans- The role of the type attribute is to prevent the browser from trying to run scripts that it does not support, and to identify them for external tools that can process them.
for example, script Type="module " prevents from the error "Browser cannot have Imports and Exports".

for example type = type/babel : this means that all the code is in babel and it is used to transpile modern js code to ES5
_____________________A_________________________________________________________________________
===============================================================================================