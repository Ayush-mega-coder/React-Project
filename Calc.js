
function Add(a,b){
    const add = a+b;
    return add;
  
  }
  function Sub(a,b){
    const sub = a-b;
    return sub;
  
  }
  function Div(a,b){
    const d = a/b;
    const div = d.toPrecision(3);
    return div;
  
  }
  function Mult(a,b){
    const mult = a*b;
    return mult;
  
  }
  
  
export  {Add,Sub,Div,Mult};