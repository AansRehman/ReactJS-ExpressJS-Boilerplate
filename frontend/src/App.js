import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import React, {useState} from 'react';
function App() {

  const [data , setData] = useState(null)
  const [print , setPrint] = useState(false)

  function getData(val)
  {
    setData(val.target.value)
    setPrint(false)
    console.warn(val.target.value)
  }
  return (
    <div className="App">
      {
        print?
        <h1>{data}</h1>
        :null
      }
      <header className="App-header">
        {/* <h3>Enter your Name: {data} </h3> */}
        <input type="txet" onChange={getData}/>
        <br/>
        <button onClick={()=>setPrint(true)}>Print Txt</button>
        </header>
    </div>
  );
}

export default App;
