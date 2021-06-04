import React from "react";
import { Add, Sub, Mult, Div } from "./Calculator";

function App() {
  return (
    
      <>
        <h1>CALCULATOR USING REACT</h1>
        <ul>
          <li>Sum of two numbers is {Add(4, 3)}</li>
          <li>Sub of two numbers is {Sub(4, 3)}</li>
          <li>Mult of two numbers is {Mult(4, 3)}</li>
          <li>Div of two numbers is {Div(4, 3)}</li>
        </ul>
      </>
    
  );
  }
  export default App;