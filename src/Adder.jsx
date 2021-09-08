import React,{useState} from "react";
const Adder = () => {
  const [a, setA]=useState("");
  const [b, setB]=useState("");
  const [c, setC]=useState(0);
  const [isCzero,setIsCzero]=useState(true);
  const add=(e)=>{
  setIsCzero(false);
  setC(parseInt(a)+parseInt(b));
  }
  return (
    <div className="component">
      <h2>Adder Example</h2>
      <header className="App-header">
        <input
         onChange={(e)=>setA(e.target.value)}
        value={a} 
        />
        <br />
        <input
         onChange={(e)=>setB(e.target.value)}
        value={b} 
        />
        <br />
        <button
         onClick={add}
         >
           Add
        </button>
        
        {(!isCzero) && <h3>Addition value is : {c} </h3> }
      
      </header>
    </div>
  ); 
}

export default Adder
