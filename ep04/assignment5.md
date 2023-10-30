# Theory 
1-Diffrence in Named Exports, Default exports and * as an export.
Ans - Default exports means , there is only one component is exported Or (you can say maybe!?) returned.
export default Component. -> By default only one component is exported by this file.
to import default export component
import Component from 'path'
....
Named Imports -> means that if we have to export more than one component from the file, then we use named exports 
export const Component1 =()=>{}
export const Component2 = ()=>{}
to import named components,
import {Component1} from "path".
.....
- * as import are used when there are many components are exported from file.
eg. const export head1
    const export head2
    const export head3

    import * as Module from "path"

all these exported components will be exported as one single object.

then, how are named and * as exports are diffrent.
- * as imports do exports and bind all the components are binded together as a single object.
we can use . (dot) notation to access the single exported component .
for eg from above eg we can access head2 like, console.log(module.head2)

and using {} in named imports we can choose one or more than one exported component. 
for eg. import {head2, head3} from "path"
console.log(head3)
---------------------------------------------------------------

2- What are React Hooks.
ans - (normal Js utility function developed by React developers)
Hooks Grants us Superpower . we can update ui using special methods/function given by react . we can change values of variables but the ui will not be updated if we have no logic for printing the new value of variable. Hooks takes over and sync the updated values auto-magically for us .
useState, useEffect, useRef etc are examples of pre built hooks given by react.  
example, const[value, setValue ]=useState(0)
value is our variable and setValue is used to update the value , so react when the value is changed then whereEver Value is present in the DOM it will be updated auto-magically.
-----------------------------------------------------------------------

3- Why Do we need useState Hook.
ans useState is used to add state to our component . State is data which changes over time and is used to keep track current state of the component. useState returns a array with two value, current state value(simply variable) and function to update it.
const[count, setCount]=useState()
// example code //
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
------------------------------------------------------------------------------------
