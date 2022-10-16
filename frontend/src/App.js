// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
// import React, {useState} from 'react';
function App() {

 const [listofUsers, setlistofUsers] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=> {
      setlistofUsers(response.data)
    })
  }, []);

  // const [data , setData] = useState(null)
  // const [print , setPrint] = useState(false)

  // function getData(val)
  // {
  //   setData(val.target.value)
  //   setPrint(false)
  //   console.warn(val.target.value)
  // }
  return (
    <div className="App">


      {/* <div className="usersDiplay">
        {listofUsers.map((user)=>{
          return(
            <div>
              <h1>Name: {user.username}</h1>
            </div>
          )
        })}
        </div> */}
      
       <header className="App-header">
       {/* <h3>Enter your Name: {data} </h3> */}
       {
       listofUsers.map((user)=>{
          return(
            <div>
              <h1>Name: {user.username}</h1>
            </div>
          )
        })
        }
       </header>

      
        </div>
    //   {
    //     print?
    //     <h1>{data}</h1>
    //     :null
    //   }
    //   <header className="App-header">
    //     {/* <h3>Enter your Name: {data} </h3> */}
    //     <input type="txet" onChange={getData}/>
    //     <br/>
    //     <button onClick={()=>setPrint(true)}>Print Txt</button>
    //     </header>
    // </div>
  );
}

export default App;
